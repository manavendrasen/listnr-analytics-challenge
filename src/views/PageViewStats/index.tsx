import React, { useState, useEffect } from "react";
import moment from "moment";

// styles
import "./PageViewStats.css";

// components
import DateRangePicker from "../../components/DateRangePicker";
import LineChart from "../../components/LineChart";

// utility functions
import getSessionsByStartEndDate from "../../utils/getSessionsByStartEndDate";
import getAmountGrouped from "../../utils/getAmountGrouped";
import getData from '../../utils/getData';

// types
import { SessionsEntry } from "../../constants/models/sessions";
import { Stats } from "../../constants/models/pageViewStats";

const PageViewStats = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState<SessionsEntry[]>([]);
	const [chartData, setChartData] = useState<Stats[]>([]);
	const [groupingCriteria, setGroupingCriteria] = useState<
		"date" | "month" | "week" | string
	>("date");
	const [date, setDate] = useState({
		startDate: new Date("2017-09-01"),
		endDate: new Date("2017-10-15"),
	});


	useEffect(() => {
		const fetchData = async () => {
			const data = await getData();
			setResult(data);
		};
		setLoading(true);
		fetchData();
		setLoading(false);
	}, []);

	useEffect(() => {
		const dataByDateRange = getSessionsByStartEndDate(
			result,
			date.startDate,
			date.endDate
		);

		const amountGrouped = getAmountGrouped(
			dataByDateRange,
			groupingCriteria
		);

		const stats: Stats[] = [];
		Object.keys(amountGrouped).forEach((key) => {
			let formattedName: string;
			switch (groupingCriteria) {
				case "date":
					formattedName = moment(key).format("ll");
					break;
				case "month":
					formattedName = key;
					break;
			}

			stats.push({
				name: formattedName!,
				date: key,
				...amountGrouped[key],
			});
		});

		stats.sort((a, b) => {
			let da = moment(a.date);
			let db = moment(b.date);
			console.log(db, da, da.diff(db));

			return da.diff(db);
		});

		setChartData(stats);
		setLoading(false);
	}, [date, groupingCriteria, result]);

	const onChange = (startDate: Date, endDate: Date) => {
		setDate({
			startDate,
			endDate,
		});
	};

	return loading ? (
		<p>Loading</p>
	) : (
		<div>
			<DateRangePicker
				startDate={date.startDate}
				endDate={date.endDate}
				onChange={onChange}
			/>

			<div className='dropdown'>
				<label>Grouping Criteria: </label>

				<select
					value={groupingCriteria}
					defaultValue='date'
					onChange={(e) => {
						setGroupingCriteria(e.target.value);
					}}
				>
					<option selected value='date'>
						Date
					</option>
					<option value='month'>Month</option>
				</select>
			</div>

			<section className='container'>
				<LineChart data={chartData} />
			</section>
		</div>
	);
};

export default PageViewStats;
