import React, { useState, useEffect } from 'react'
import moment from 'moment'

// styles
import './PageViewStats.css';

import Results from '../../constants/result.json'

// components
import DateRangePicker from '../../components/DateRangePicker';
import AreaChart from '../../components/AreaChart'
// utility functions
import getSessionsByStartEndDate from '../../utils/getSessionsByStartEndDate'
import getAmountGroupedByDate from '../../utils/getAmountGroupedByDate';

// types
import { Stats } from '../../constants/models/pageViewStats'
const PageViewStats = () => {
	const [result, setResult] = useState<Stats[]>([]);
	const [date, setDate] = useState({
		startDate: new Date("2017-09-01"),
		endDate: new Date("2017-10-15")
	});

	useEffect(() => {
		const dataByDateRange = getSessionsByStartEndDate(
			Results,
			date.startDate,
			date.endDate
		);
		const categoryParsedDate = getAmountGroupedByDate(dataByDateRange);
		const response: Stats[] = [];
		Object.keys(categoryParsedDate).forEach((key) => {
			response.push({
				name: moment(key).format("ll"),
				date: key,
				visits: categoryParsedDate[key].visits,
				hits: categoryParsedDate[key].hits,
				pageviews: categoryParsedDate[key].pageviews,
				newVisits: categoryParsedDate[key].newVisits,
				bounces: categoryParsedDate[key].bounces
			});
		});
		response.sort((a, b) => {
			let da = new Date(a.date),
				db = new Date(b.date);
			return da.getTime() - db.getTime();
		});
		setResult(response);
	}, [date]);

	const onChange = (startDate: Date, endDate: Date) => {
		setDate({
			startDate,
			endDate
		});
	};

	return (
		<div>
			<div className="date-picker">
				<DateRangePicker
					startDate={date.startDate}
					endDate={date.endDate}
					onChange={onChange}
				/>
			</div>

			{/* <pre>
				{JSON.stringify(result, null, 2)}
			</pre> */}

			<section className="container">
				<AreaChart data={result} />
			</section>
		</div>
	)
}

export default PageViewStats
