import { Link } from 'react-router-dom'
import './Navbar.css'

import { CHANNEL_GROUPING_STATS, PAGE_VIEW_STATS } from '../../constants/routes'
const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to={PAGE_VIEW_STATS}> Page View Statistics</Link>
				</li>
				<li>
					<Link to={CHANNEL_GROUPING_STATS}>Channel Grouping Statistics</Link>
				</li>
			</ul>
		</nav >
	)
}

export default Navbar
