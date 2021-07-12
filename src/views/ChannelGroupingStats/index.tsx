import React, { useEffect, useState } from "react";

// components
import DateRangePicker from "../../components/DateRangePicker";
import PieChart from "../../components/PieChart";

// utility
import getCategoryDataByFeature from "../../utils/getCategoryDataByFeature";
import getSessionsByStartEndDate from "../../utils/getSessionsByStartEndDate";
import getData from "../../utils/getData";

// interfaces
import { SessionsEntry } from "../../constants/models/sessions";

// styles
import "./ChannelGroupingStats.css";

interface ChartData {
	name: string;
	value: number;
}

const ChannelGroupingStats = () => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState<SessionsEntry[]>([]);
	const [chartData, setChartData] = useState<ChartData[]>([]);
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

		const categorizedData = getCategoryDataByFeature(dataByDateRange);
		let data: ChartData[] = [];
		Object.keys(categorizedData!).forEach((key) => {
			data.push({
				name: key,
				value: categorizedData![key],
			});
		});

		setChartData(data);
	}, [date, result]);

	const onChange = (startDate: Date, endDate: Date) => {
		setDate({
			startDate,
			endDate,
		});
	};

	return loading ? (
		<p>Loading...</p>
	) : (
		<div>
			<DateRangePicker
				startDate={date.startDate}
				endDate={date.endDate}
				onChange={onChange}
			/>
			<section className='container'>
				<PieChart data={chartData} />
			</section>
		</div>
	);
};

export default ChannelGroupingStats;
