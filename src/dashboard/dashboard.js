import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';
import DashboardMenu from './../dashboardMenu/dashboardMenu';
import Template from './../template/template';
import AddItemForm from './../addItem/addItemForm';

const Dashboard = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        templates: React.PropTypes.instanceOf(List).isRequired,
        isShowAddItem: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            isShowAddItem: false,
        }
    },

    style() {
        return {
            paddingTop: 30,
            paddingBottom: 30,
        };
    },

    render() {
        const template = this.props.template;

        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu template={template} templates={this.props.templates}/>

                {!this.props.isShowAddItem && <Template template={template}/>}
                {this.props.isShowAddItem && <AddItemForm/>}
            </div>
        );
    }
});

export default Dashboard;
