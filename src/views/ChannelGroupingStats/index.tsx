import { useEffect, useState } from "react";

// components
import DateRangePicker from "../../components/DateRangePicker";
import PieChart from "../../components/PieChart";

// utility
import getCategoryDataByFeature from "../../utils/getCategoryDataByFeature";
import getSessionsByStartEndDate from "../../utils/getSessionsByStartEndDate";
import getData from "../../utils/getData";

// types
import { SessionsEntry } from "../../constants/models/sessions";

// styles
import "./ChannelGroupingStats.css";

interface ChartData {
	name: string;
	value: number;
}

const ChannelGroupingStats = () => {
	const [loading, setLoading] = useState(true);
	const [fetchedData, setFetchedData] = useState<SessionsEntry[]>([]);
	// chart data used to render chart
	const [chartData, setChartData] = useState<ChartData[]>([]);

	// default date in the fields
	const [date, setDate] = useState({
		startDate: new Date("2017-09-01"),
		endDate: new Date("2017-10-15"),
	});

	// on component mount fetch the data
	useEffect(() => {
		const fetchData = async () => {
			const data = await getData();
			setFetchedData(data);
		};
		setLoading(true);
		fetchData();
		setLoading(false);
	}, []);

	useEffect(() => {
		// filter the data by range
		const dataByDateRange = getSessionsByStartEndDate(
			fetchedData,
			date.startDate,
			date.endDate
		);

		// find the values of different categories
		const category = getCategoryDataByFeature(dataByDateRange);

		// data for pie chart
		let data: ChartData[] = [];
		Object.keys(category).forEach((key) => {
			data.push({
				name: key,
				value: category[key],
			});
		});

		setChartData(data);
	}, [date, fetchedData]);

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
