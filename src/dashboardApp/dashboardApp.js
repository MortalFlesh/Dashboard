import React from 'react';
import * as store from './store';
import * as actions from './actions';
import state from './state';
import Dashboard from './../dashboard/dashboard';
import TemplateRecord from './../template/templateRecord';

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

        const templates = store.getTemplates();

        return (
            <Dashboard template={template} templates={templates}/>
        );
    }
});

export default DashboardApp;
