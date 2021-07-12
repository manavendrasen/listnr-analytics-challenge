import moment from "moment";

import { SessionsEntry } from "../constants/models/sessions";

/*
  Return all sessions between given start and end date
*/

function getSessionsByStartEndDate(
  sessionList: Array<SessionsEntry>,
  startDate: Date,
  endDate: Date
) {
  let startDateUTC = moment.utc(startDate).format();
  let endDateUTC = moment.utc(endDate).format();

  const sessionsStartEndDate: Array<SessionsEntry> = [];

  // for all session in session list parameter, check if it is between start and end date
  sessionList.forEach((session) => {
    if (session.date > startDateUTC && session.date <= endDateUTC) {
      sessionsStartEndDate.push(session);
    }
  });

  return sessionsStartEndDate;
}

export default getSessionsByStartEndDate;
