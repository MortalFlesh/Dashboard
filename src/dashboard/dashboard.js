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
    },

    render() {
        const template = this.props.template;

        return (
            <div className="Dashboard">
                <DashboardMenu template={template}/>
                <Template template={template}/>
            </div>
        );
    }
});

export default Dashboard;
