import React from "react";
import * as store from "./store";
import {state, loadServerData} from "./state";
import Dashboard from "./../dashboard/dashboard";
import TemplateRecord from "./../template/templateRecord";

const DashboardApp = React.createClass({
    componentDidMount() {
        state.on('change', () => {
            this.forceUpdate();
        });

        loadServerData();
    },

    render() {
        const dashboard = {
            flashMessages: store.getFlashMessages(),
            template: new TemplateRecord({
                id: store.getSelectedTemplate(),
                name: store.getTemplateName(),
                items: store.getItems(),
            }),
            templates: store.getTemplates(),
            isShowAddItem: store.isShowAddItem(),
            isShowAddTemplate: store.isShowAddTemplate(),
            addItem: store.getAddItem(),
            addTemplate: store.getAddTemplate(),
        };

        return (
            <Dashboard {...dashboard}/>
        );
    }
});

export default DashboardApp;
