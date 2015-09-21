import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';

const Dashboard = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        return (
            <div className="Dashboard">
                <DashboardMenu template={template}/>
                <Template template={template}/>
            </div>
        );
    }
});

export default Dashboard;
