import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// components
import Navbar from './components/Navbar'

// constants
import { PAGE_VIEW_STATS, CHANNEL_GROUPING_STATS } from './constants/routes'

// views
import { PageViewStats, ChannelGroupingStats } from './views'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        {/* handle auth */}
        {/* redirecting to another page for stats */}
        <Route exact path="/">
          <Redirect push to={PAGE_VIEW_STATS} />
        </Route>

        {/* pie chart according to channel grouping */}
        <Route exact path={CHANNEL_GROUPING_STATS} component={ChannelGroupingStats} />

        {/* stack area chart according to view stats */}
        <Route exact path={PAGE_VIEW_STATS} component={PageViewStats} />
      </Switch>
    </Router>
  )
}

export default App;
