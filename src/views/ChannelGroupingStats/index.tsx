import React from 'react'
import Results from '../../constants/result.json';
import getPercentOfChannelGrouping from '../../utils/getPercentOfChannelGrouping'
import PieChart from '../../components/PieChart'

const ChannelGroupingStats = () => {
	const chartDate = getPercentOfChannelGrouping(Results);
	return (
		<div>
			<PieChart data={chartDate!} />
		</div>
	)
}

export default ChannelGroupingStats
