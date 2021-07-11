import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

interface Props {
	startDate: Date;
	endDate: Date;
	onChange: (startDate: Date, endDate: Date) => void
}

const DateRangePicker: React.FC<Props> = ({ startDate, endDate, onChange }) => {
	return (
		<RangeDatePicker
			highlightToday
			onChange={(startDate: Date, endDate: Date) => onChange(startDate, endDate)}
			startDate={startDate}
			endDate={endDate}
			minDate={new Date(1900, 0, 1)}
			maxDate={new Date(2100, 0, 1)}
		/>
	);
};

export default DateRangePicker;
