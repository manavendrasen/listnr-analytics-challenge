import moment from "moment";

import { SessionsEntry } from '../constants/models/sessions';

/*
  Return all the sessions between the start date and the date range from the start date
*/

function getSessionsByDateRange(sessionList:Array<SessionsEntry>, startDate:Date, dateRange:number) {
  let endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + dateRange);

  let startDateUTC = moment.utc(startDate).format();
	let endDateUTC = moment.utc(endDate).format();
	
  const sessionByDateRange:Array<SessionsEntry> = [];

  // if session date falls between start date (inclusive) and calculated end date 
  sessionList.forEach((session:SessionsEntry) => {
    if (session.date >= startDateUTC && session.date < endDateUTC) {
      sessionByDateRange.push(session);
    }
	});
	
  return sessionByDateRange;
}

export default getSessionsByDateRange;