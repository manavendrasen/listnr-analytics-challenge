import React, { useEffect, useState } from "react";
import Results from "../../constants/result.json";

// components
import DateRangePicker from '../../components/DateRangePicker'
import PieChart from "../../components/PieChart";

// utility
import getCategoryDataByFeature from "../../utils/getCategoryDataByFeature";
import getSessionsByStartEndDate from "../../utils/getSessionsByStartEndDate";

// interfaces
import { SessionsEntry } from '../../constants/models/sessions'

// styles
import "./ChannelGroupingStats.css";

interface ChartData {
	name: string;
	value: number;
}

const ChannelGroupingStats = () => {
	const [result, setResult] = useState<SessionsEntry[]>(Results)
	const [date, setDate] = useState({
		startDate: new Date("2017-09-01"),
		endDate: new Date("2017-10-15"),
	});

	useEffect(() => {
		const dataByDateRange = getSessionsByStartEndDate(
			Results,
			date.startDate,
			date.endDate
		);
		setResult(dataByDateRange)
	}, [date]);

	const onChange = (startDate: Date, endDate: Date) => {
		setDate({
			startDate,
			endDate,
		});
	};

	const chartDate = getCategoryDataByFeature(result);
	let data: ChartData[] = [];
	Object.keys(chartDate!).forEach((key) => {
		data.push({
			name: key,
			value: chartDate![key],
		});
	});

	return (
		<div>
			<DateRangePicker
				startDate={date.startDate}
				endDate={date.endDate}
				onChange={onChange}
			/>
			<section className="container">
				<PieChart data={data} />
			</section>
		</div >
	);
};

export default ChannelGroupingStats;
