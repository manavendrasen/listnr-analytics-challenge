import moment from "moment";

import { SessionsEntry } from '../constants/models/sessions';

function getSessionsByDateRange(list:Array<SessionsEntry>, startDate:Date, dateRange:number) {
  let endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + dateRange);

  let startDateUTC = moment.utc(startDate).format();
	let endDateUTC = moment.utc(endDate).format();
	
  const sessionByDateRange:Array<SessionsEntry> = [];

  list.forEach((result:SessionsEntry) => {
    if (result.date > startDateUTC && result.date <= endDateUTC) {
      sessionByDateRange.push(result);
    }
	});
	
  return sessionByDateRange;
}

export default getSessionsByDateRange;