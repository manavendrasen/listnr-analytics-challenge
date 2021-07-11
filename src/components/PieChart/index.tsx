import { PieChart, Pie, Tooltip } from "recharts";


interface Props {
	data: {
		name: string,
		value: number
	}[]
}

const PieChartFromData: React.FC<Props> = ({ data }) => {
	return (
		<PieChart width={1000} height={400}>
			<Pie
				dataKey="value"
				isAnimationActive={true}
				data={data}
				cx={200}
				cy={200}
				outerRadius={100}
				fill="#234422"
				label
			/>
			<Tooltip />
		</PieChart>
	);
};

export default PieChartFromData;
