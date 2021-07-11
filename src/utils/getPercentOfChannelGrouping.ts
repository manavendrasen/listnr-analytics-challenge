
import { SessionsEntry } from '../constants/models/sessions';

interface GroupedSession {
	[key: string]: number
}

function getPercentOfChannelGrouping(list: Array<SessionsEntry>) {
	
  const groupedSessions:GroupedSession = {};
  const result: { name: string; value: number; }[] = [];
  const length = Object.keys(list).length;
  if (length === 0) {
    console.error("List is empty");
    return;
  }
  list.forEach((l) => {
    const category = l.channelGrouping;
    if (category in groupedSessions) {
      groupedSessions[category] += 1;
    } else {
      groupedSessions[category] = 1;
    }
  });

  Object.keys(groupedSessions).forEach((key) => {
    result.push({
      name: key,
      value: groupedSessions[key]
    });
  });
  return result;
}

export default getPercentOfChannelGrouping;