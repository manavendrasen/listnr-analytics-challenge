import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts";

interface Props {
	data: {
		name: string,
		value: number
	}[]
}

const PieChartFromData: React.FC<Props> = ({ data }) => {
	const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#E53E3E", "#ED8936", "#9F7AEA", "#ED64A6"];
	return (
		<ResponsiveContainer width="100%" height={500}>
			<PieChart width={1000} height={500}>
				<Pie
					dataKey="value"
					isAnimationActive={true}
					data={data}
					label={(label) => (`${(label.percent * 100).toFixed(0)}%`)}
					cx="50%"
					cy="50%"
					labelLine={false}
					outerRadius={150}
					fill="#8884d8"
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend />
			</PieChart>
		</ResponsiveContainer >
	);
};

export default PieChartFromData;
