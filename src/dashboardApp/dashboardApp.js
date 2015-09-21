import React from 'react';
import * as store from './store';
import * as actions from './actions';
import state from './state';
import Dashboard from './../dashboard/dashboard';

const DashboardApp = React.createClass({
    componentDidMount() {
        state.on('change', () => {
            this.forceUpdate();
        });
    },

    render() {
        return (
            <div className="DashboardApp">
                <Dashboard/>
            </div>
        );
    }
});

export default DashboardApp;
