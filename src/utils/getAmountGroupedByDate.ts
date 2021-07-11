import {SessionsEntry} from '../constants/models/sessions'

interface AmountGroupedByDate {
	[date: string]: {
		visits: number,
    hits: number	,
    pageviews: number,
    newVisits: number,
    bounces: number
	}
}

function getAmountGroupedByDate(list:Array<SessionsEntry>) {

	const groupedSessions: AmountGroupedByDate = {};
  list.forEach((l) => {
    const date = l.date;
    if (date in groupedSessions) {
      groupedSessions[date].visits += l.totals.visits;
      groupedSessions[date].hits += l.totals.hits;
      groupedSessions[date].pageviews += l.totals.pageviews;
      groupedSessions[date].newVisits += l.totals.newVisits;
      groupedSessions[date].bounces += l.totals.bounces;
    } else {
      groupedSessions[date] = { ...l.totals };
    }
	});
	
  return groupedSessions;
}

export default getAmountGroupedByDate;