import moment from "moment";

import { SessionsEntry } from "../constants/models/sessions";
interface AmountGrouped {
  [date: string]: {
    visits: number;
    hits: number;
    pageviews: number;
    newVisits: number;
    bounces: number;
  };
}

/*
  Returns page stats grouped according to criteria (date, month)
*/

function getAmountGrouped(
  sessionList: Array<SessionsEntry>,
  criteria: "date" | "month" | string
) {
  const groupedSessions: AmountGrouped = {};
  // groupingCriteria acts as the key to the objects
  let groupingCriteria: string;

  sessionList.forEach((session) => {
    // for each session compute the key according to the criteria
    switch (criteria) {
      case "date": {
        groupingCriteria = session.date;
        break;
      }
      case "month": {
        groupingCriteria = moment(session.date).format("MMM YYYY");
        break;
      }
    }

    // assign sessions according to the grouping criteria
    if (groupingCriteria in groupedSessions) {
      groupedSessions[groupingCriteria].visits += session.totals.visits;
      groupedSessions[groupingCriteria].hits += session.totals.hits;
      groupedSessions[groupingCriteria].pageviews += session.totals.pageviews;
      groupedSessions[groupingCriteria].newVisits += session.totals.newVisits;
      groupedSessions[groupingCriteria].bounces += session.totals.bounces;
    } else {
      groupedSessions[groupingCriteria] = { ...session.totals };
    }
  });

  return groupedSessions;
}

export default getAmountGrouped;
