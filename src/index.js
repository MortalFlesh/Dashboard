import './lib/stateDebugger';
import React from 'react';
import ReactDom from 'react-dom';
import DashboardApp from './dashboardApp/dashboardApp';
import {loadServerData} from './dashboardApp/state';

window.dashboard.debug.logStart();

loadServerData();

ReactDom.render(<DashboardApp/>, document.getElementById('dashboard'));
