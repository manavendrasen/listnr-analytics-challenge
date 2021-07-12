
export interface SessionsEntry {
	channelGrouping: string,
	date: string,
	device: Object,
	fullVisitorId: number,
	geoNetwork: Object,
	sessionId: string,
	socialEngagementType: string,
	totals: {
		visits: number,
    hits: number	,
    pageviews: number,
    newVisits: number,
    bounces: number
	},
	trafficSource: Object,
	visitId: number,
	visitNumber: number,
	visitStartTime: number
}
