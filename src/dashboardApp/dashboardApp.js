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
        const template = new TemplateRecord({
            id: store.getSelectedTemplate(),
            name: store.getTemplateName(),
            items: store.getItems(),
        });

        return (
            <div className="DashboardApp">
                <Dashboard template={template}/>
            </div>
        );
    }
});

export default DashboardApp;
