import './lib/stateDebugger';
import React from 'react';
import DashboardApp from './dashboardApp/dashboardApp';
import {loadServerData} from './dashboardApp/state';

window.tutorial.debug.logStart();

loadServerData();

React.render(<DashboardApp/>, document.getElementById('dashboard'));
