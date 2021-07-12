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
  criteria: "date" | "month" 
) {
  const groupedSessions: AmountGrouped = {};
  // groupingCriteria acts as the key to the objects
  let groupingKey: string;

  sessionList.forEach((session) => {
    // for each session compute the key according to the criteria
    switch (criteria) {
      case "date": {
        groupingKey = session.date;
        break;
      }
      case "month": {
        groupingKey = moment(session.date).format("MMM YYYY");
        break;
      }
    }

    // assign sessions according to the grouping criteria
    if (groupingKey in groupedSessions) {
      groupedSessions[groupingKey].visits += session.totals.visits;
      groupedSessions[groupingKey].hits += session.totals.hits;
      groupedSessions[groupingKey].pageviews += session.totals.pageviews;
      groupedSessions[groupingKey].newVisits += session.totals.newVisits;
      groupedSessions[groupingKey].bounces += session.totals.bounces;
    } else {
      groupedSessions[groupingKey] = { ...session.totals };
    }
  });

  return groupedSessions;
}

export default getAmountGrouped;
