import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";

import DashboardMenu from "./../DashboardMenu";
import FlashMessages from "./../../flashMessages/flashMessages";
import TemplateRecord from "./../../template/templateRecord";
import ItemRecord from "./../../item/itemRecord";
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
        const {flashMessages} = this.props;

        return (
            <div className="Dashboard" style={this.style()}>
                <DashboardMenu
                    addTemplateHandler={() => {
                        this.props.showAddTemplate(true)
                    }}
                    template={this.props.template}
                    templates={this.props.templates}
                    selectTemplate={this.props.selectTemplate}
                />

                <Container>
                    <Header>
                        <HeaderButtons
                            isShowAddItem={this.props.isShowAddItem}
                            isShowAddTemplate={this.props.isShowAddTemplate}/>
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
    selectTemplate: PropTypes.func.isRequired,
};

export default Dashboard;
