import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend
} from "recharts";

// types
import { Stats } from '../../constants/models/pageViewStats'

interface Props {
	data: Stats[]
}

const LineChartFromData: React.FC<Props> = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={500}>
			<LineChart
				width={1000}
				height={400}
				data={data}
				margin={{ right: 32 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="visits"
					// stackId="1"
					stroke="#805AD5"
					fill="#805AD5"
				/>
				<Line
					type="monotone"
					dataKey="hits"
					// stackId="1"
					stroke="#48BB78"
					fill="#48BB78"
				/>
				<Line
					type="monotone"
					dataKey="pageviews"
					// stackId="1"
					stroke="#ED64A6"
					fill="#ED64A6"
				/>
				<Line
					type="monotone"
					dataKey="newVisits"
					// stackId="1"
					stroke="#F56565"
					fill="#F56565"
				/>
				<Line
					type="monotone"
					dataKey="bounces"
					// stackId="1"
					stroke="#4299E1"
					fill="#4299E1"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartFromData;
