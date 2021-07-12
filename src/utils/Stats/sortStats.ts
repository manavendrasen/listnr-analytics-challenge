import moment from "moment";
import { Stats } from "../../constants/models/pageViewStats";

export function sortState(list: Stats[]) {
  list.sort((a, b) => {
    let date1 = moment(a.date);
    let date2 = moment(b.date);
    return date1.diff(date2);
	});
	return list;
}
