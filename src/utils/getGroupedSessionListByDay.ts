import {SessionsEntry} from '../constants/models/sessions';

interface GroupedSessionsByDay {
	[date: string]: SessionsEntry[]
}

function getGroupedSessionListByDay(list:Array<SessionsEntry>) {
  const groupedSessions:GroupedSessionsByDay = {};
  list.forEach((l) => {
    const date = l.date;
    if (date in groupedSessions) {
      groupedSessions[date].push(l);
    } else {
      groupedSessions[date] = new Array(l);
    }
  });
  return groupedSessions;
}

export default getGroupedSessionListByDay;