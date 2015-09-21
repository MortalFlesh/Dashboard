import './lib/stateDebugger';
import React from 'react';
import DashboardApp from './dashboardApp/dashboardApp';

window.tutorial.debug.logStart();

React.render(<DashboardApp/>, document.getElementById('dashboard'));
