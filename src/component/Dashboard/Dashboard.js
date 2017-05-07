import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";

import FlashMessages from "./../../flashMessages/flashMessages";
import TemplateRecord from "./../../template/templateRecord";
import ItemRecord from "./../../item/itemRecord";
import DashboardMenu from "./../../dashboardMenu/dashboardMenu";
import Template from "./../../template/template";
import AddItemForm from "./../../addItem/addItemForm";
import AddTemplateForm from "./../../addTemplate/addTemplateForm";
import Container from "./../../bootstrap/container";
import Header from "./../../bootstrap/header";
import HeaderButtons from "./../../headerButtons/headerButtons";

class Dashboard extends React.PureComponent {
    style() {
        return {
            paddingTop: 30,
            paddingBottom: 30,
        };
    }

    content() {
        if (this.props.isShowAddItem) {
            return <AddItemForm item={this.props.addItem}/>;
        } else if (this.props.isShowAddTemplate) {
            return <AddTemplateForm template={this.props.addTemplate}/>;
        } else {
            return <Template template={this.props.template}/>;
        }
    }

    render() {
        const {template, templates, isShowAddTemplate, isShowAddItem, showAddTemplate, flashMessages} = this.props;

        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu
                    addTemplateHandler={() => {
                        showAddTemplate(true)
                    }}
                    template={template}
                    templates={templates}/>

                <Container>
                    <Header>
                        <HeaderButtons
                            isShowAddItem={isShowAddItem}
                            isShowAddTemplate={isShowAddTemplate}/>
                    </Header>

                    {flashMessages.count() > 0
                        ? <FlashMessages flashMessages={flashMessages}/>
                        : null
                    }

                    {this.content()}
                </Container>
            </div>
        );
    }
}

Dashboard.propTypes = {
    flashMessages: PropTypes.instanceOf(List).isRequired,

    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    templates: PropTypes.instanceOf(List).isRequired,

    isShowAddItem: PropTypes.bool.isRequired,
    addItem: PropTypes.instanceOf(ItemRecord).isRequired,

    isShowAddTemplate: PropTypes.bool.isRequired,
    addTemplate: PropTypes.instanceOf(TemplateRecord).isRequired,
    showAddTemplate: PropTypes.func.isRequired,
};

export default Dashboard;
