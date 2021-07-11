import moment from "moment";

import { SessionsEntry } from '../constants/models/sessions'

export default function getSessionsByStartEndDate(list:Array<SessionsEntry>, startDate: Date, endDate:Date) {
  
  let startDateUTC = moment.utc(startDate).format();
  let endDateUTC = moment.utc(endDate).format();

  const sessionsByDateRange:Array<SessionsEntry> = [];
  list.forEach((result) => {
    if (result.date > startDateUTC && result.date <= endDateUTC) {
      sessionsByDateRange.push(result);
    }
  });

  return sessionsByDateRange;
}
