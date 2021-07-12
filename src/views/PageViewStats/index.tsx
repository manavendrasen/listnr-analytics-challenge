import { useState, useEffect } from "react";
import moment from "moment";

// components
import DateRangePicker from "../../components/DateRangePicker";
import LineChart from "../../components/LineChart";

// utility functions
import getSessionsByStartEndDate from "../../utils/getSessionsByStartEndDate";
import getAmountGrouped from "../../utils/getAmountGrouped";
import getData from "../../utils/getData";
import { sortState } from "../../utils/Stats/sortStats";

// types
import { SessionsEntry } from "../../constants/models/sessions";
import { Stats } from "../../constants/models/pageViewStats";

// styles
import "./PageViewStats.css";

const PageViewStats = () => {
	const [loading, setLoading] = useState(true);
	const [fetchedData, setFetchedData] = useState<SessionsEntry[]>([]);
	const [chartData, setChartData] = useState<Stats[]>([]);
	const [groupingCriteria, setGroupingCriteria] = useState<"date" | "month">(
		"date"
	);
	const [date, setDate] = useState({
		startDate: new Date("2017-09-01"),
		endDate: new Date("2017-10-15"),
	});

	// on component mount fetch json
	const fetchData = async () => {
		const data = await getData();
		setFetchedData(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		// filter data according to selected dates
		const dataByDateRange = getSessionsByStartEndDate(
			fetchedData,
			date.startDate,
			date.endDate
		);

		// group the data according to grouping criteria (date, month)
		const amountGrouped = getAmountGrouped(dataByDateRange, groupingCriteria);

		// construct data for chart
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

		// sort stats to show in form of timeline
		setChartData(sortState(stats));
		setLoading(false);
	}, [date, groupingCriteria, fetchedData]);

	const onChange = (startDate: Date, endDate: Date) => {
		setDate({
			startDate,
			endDate,
		});
	};

	const chartKeys = ["visits", "hits", "pageviews", "newVisits", "bounces"];

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
						setGroupingCriteria(e.target.value as "month" | "date");
					}}
				>
					<option selected value='date'>
						Date
					</option>
					<option value='month'>Month</option>
				</select>
			</div>

			<section className='container'>
				<LineChart data={chartData} keys={chartKeys} />
			</section>
		</div>
	);
};

export default PageViewStats;
