import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";

import FlashMessagesApp from "./../FlashMessages";
import AddItemFormApp from "./../AddItemForm";
import AddTemplateFormApp from "./../AddTemplateForm";
import DashboardMenu from "./../DashboardMenu";
import TemplateRecord from "./../../template/templateRecord";
import Template from "./../../template/template";
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
            return <AddItemFormApp/>;
        } else if (this.props.isShowAddTemplate) {
            return <AddTemplateFormApp/>;
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
                        ? <FlashMessagesApp/>
                        : null
                    }

                    {this.content()}
                </Container>
            </div>
        );
    }
}

Dashboard.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    templates: PropTypes.instanceOf(List).isRequired,

    isShowAddItem: PropTypes.bool.isRequired,
    isShowAddTemplate: PropTypes.bool.isRequired,

    showAddTemplate: PropTypes.func.isRequired,
    selectTemplate: PropTypes.func.isRequired,
};

export default Dashboard;
