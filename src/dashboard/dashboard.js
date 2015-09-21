import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';
import DashboardMenu from './../dashboardMenu/dashboardMenu';
import Template from './../template/template';

const Dashboard = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        templates: React.PropTypes.instanceOf(List).isRequired,
    },

    style() {
        return {
            paddingTop: 70,
            paddingBottom: 30,
        };
    },

    render() {
        const template = this.props.template;

        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu template={template} templates={this.props.templates}/>
                <Template template={template}/>
            </div>
        );
    }
});

export default Dashboard;
