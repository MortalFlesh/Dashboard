import './lib/stateDebugger';
import React from 'react';
import ReactDom from 'react-dom';
import DashboardApp from './dashboardApp/dashboardApp';

window.dashboard.debug.logStart();

ReactDom.render(<DashboardApp/>, document.getElementById('dashboard'));
