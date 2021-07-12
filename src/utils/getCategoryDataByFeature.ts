
import { SessionsEntry } from '../constants/models/sessions';

interface GroupedSession {
	[key: string]: number
}

/*
  Return count of different categories in channelGrouping feature
*/

function getCategoryDataByFeature(sessionList: Array<SessionsEntry>) {
	
  const groupedSessions:GroupedSession = {};

  // for each session find the channelGrouping and group accordingly
  sessionList.forEach((session) => {
    const category = session.channelGrouping;
    if (category in groupedSessions) {
      groupedSessions[category] += 1;
    } else {
      groupedSessions[category] = 1;
    }
  });

  return groupedSessions;
}

export default getCategoryDataByFeature;