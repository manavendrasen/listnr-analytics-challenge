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

// color constants
import { COLORS } from '../../constants/colors/chartColors';

// types
import { Stats } from '../../constants/models/pageViewStats'

interface Props {
	data: Stats[],
	keys: string[]
}

const LineChartFromData: React.FC<Props> = ({ data, keys }) => {
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
				{keys.map((key, index) => (
					<Line
						key={index}
						type="monotone"
						dataKey={key}
						fill={COLORS[index % COLORS.length]}
						stroke={COLORS[index % COLORS.length]}
					/>
				))}

			</LineChart>
		</ResponsiveContainer>
	);
};

export default LineChartFromData;
