import moment from "moment";
import { SessionsEntry } from "../constants/models/sessions";

interface GroupedSessionsByDay {
  [date: string]: SessionsEntry[];
}

/*
  Returns session list grouped by criteria (date, month)
*/

function getGroupedSessionList(
  sessionList: Array<SessionsEntry>,
  criteria: "date" | "month" | string
) {
  const groupedSessions: GroupedSessionsByDay = {};
  let groupingCriteria: string;

  sessionList.forEach((session) => {
    // for every session in session list find the key according to the criteria
    switch (criteria) {
      case "date": {
        // finding the date for session, and grouping the sessions
        groupingCriteria = session.date;
        break;
      }
      case "month": {
        // finding the month+year for session, and grouping the sessions
        groupingCriteria = moment(session.date).format("MMM YYYY");
        break;
      }
    }
    if (groupingCriteria in groupedSessions) {
      groupedSessions[groupingCriteria].push(session);
    } else {
      groupedSessions[groupingCriteria] = new Array(session);
    }
  });
  return groupedSessions;
}

export default getGroupedSessionList;
