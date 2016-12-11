import {List} from "immutable";
import React from "react";
import * as actions from "./../dashboardApp/actions";
import PureRenderMixin from "react-addons-pure-render-mixin";
import FlashMessages from "./../flashMessages/flashMessages";
import TemplateRecord from "./../template/templateRecord";
import ItemRecord from "./../item/itemRecord";
import DashboardMenu from "./../dashboardMenu/dashboardMenu";
import Template from "./../template/template";
import AddItemForm from "./../addItem/addItemForm";
import AddTemplateForm from "./../addTemplate/addTemplateForm";
import Container from "./../bootstrap/container";
import Header from "./../bootstrap/header";
import HeaderButtons from "./../headerButtons/headerButtons";

const Dashboard = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        flashMessages: React.PropTypes.instanceOf(List).isRequired,
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        templates: React.PropTypes.instanceOf(List).isRequired,
        isShowAddItem: React.PropTypes.bool.isRequired,
        addItem: React.PropTypes.instanceOf(ItemRecord).isRequired,
        isShowAddTemplate: React.PropTypes.bool.isRequired,
        addTemplate: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    style() {
        return {
            paddingTop: 30,
            paddingBottom: 30,
        };
    },

    addTemplateHandler() {
        actions.showAddTemplate(true);
    },

    content() {
        if (this.props.isShowAddItem) {
            return <AddItemForm item={this.props.addItem}/>;
        } else if (this.props.isShowAddTemplate) {
            return <AddTemplateForm template={this.props.addTemplate}/>;
        } else {
            return <Template template={this.props.template}/>;
        }
    },

    render() {
        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu
                    addTemplateHandler={this.addTemplateHandler}
                    template={this.props.template}
                    templates={this.props.templates}/>

                <Container>
                    <Header>
                        <HeaderButtons
                            isShowAddItem={this.props.isShowAddItem}
                            isShowAddTemplate={this.props.isShowAddTemplate}/>
                    </Header>

                    {this.props.flashMessages.count() > 0 &&
                        <FlashMessages flashMessages={this.props.flashMessages}/>
                    }

                    {this.content()}
                </Container>
            </div>
        );
    }
});

export default Dashboard;
