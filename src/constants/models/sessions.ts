
export interface SessionsEntry {
	channelGrouping: string,
	date: string,
	totals: {
		visits: number,
    hits: number	,
    pageviews: number,
    newVisits: number,
    bounces: number
	},
}
