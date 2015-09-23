import {List} from 'immutable';
import React from 'react';
import * as actions from './../dashboardApp/actions';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import AlertSuccess from './../bootstrap/alertSuccess';
import TemplateRecord from './../template/templateRecord';
import ItemRecord from './../item/itemRecord';
import DashboardMenu from './../dashboardMenu/dashboardMenu';
import Template from './../template/template';
import AddItemForm from './../addItem/addItemForm';
import Container from './../bootstrap/container';
import Header from './../bootstrap/header';
import PrimaryButton from './../bootstrap/primaryButton';

const Dashboard = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        templates: React.PropTypes.instanceOf(List).isRequired,
        isShowAddItem: React.PropTypes.bool,
        isAddItemSuccess: React.PropTypes.bool,
        addItem: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    getDefaultProps() {
        return {
            isShowAddItem: false,
            isAddItemSuccess: false,
        }
    },

    style() {
        return {
            paddingTop: 30,
            paddingBottom: 30,
        };
    },

    header() {
        if (this.props.isShowAddItem) {
            return <PrimaryButton onClick={this.backHandler}>{'< Back'}</PrimaryButton>;
        } else {
            return <PrimaryButton onClick={this.addItemHandler}>+ Item</PrimaryButton>;
        }
    },

    addItemHandler() {
        actions.showAddItem(true);
    },

    backHandler() {
        actions.showAddItem(false);
    },

    content() {
        if (this.props.isShowAddItem) {
            return <AddItemForm item={this.props.addItem} isSuccess={this.props.isAddItemSuccess}/>;
        } else {
            return <Template template={this.props.template}/>;
        }
    },

    render() {
        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu template={this.props.template} templates={this.props.templates}/>

                <Container>
                    <Header>
                        {this.header()}
                    </Header>

                    {this.props.isAddItemSuccess &&
                        <AlertSuccess>New item <strong>successfuly saved</strong>!</AlertSuccess>
                    }

                    {this.content()}
                </Container>
            </div>
        );
    }
});

export default Dashboard;
