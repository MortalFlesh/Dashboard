import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import TemplateRecord from "./../../template/templateRecord";

import FlashMessagesApp from "./../FlashMessages";
import AddItemFormApp from "./../AddItemForm";
import AddTemplateFormApp from "./../AddTemplateForm";
import DashboardMenu from "./../DashboardMenu";
import HeaderButtons from "./../HeaderButtons";
import Container from "./../bootstrap/Container";
import Header from "./../bootstrap/Header";
import Template from "./../../template/template";

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
                    template={this.props.template}
                    templates={this.props.templates}
                    selectTemplate={this.props.selectTemplate}
                    showAddTemplate={this.props.showAddTemplate}
                />

                <Container>
                    <Header>
                        <HeaderButtons
                            isShowAddItem={this.props.isShowAddItem}
                            isShowAddTemplate={this.props.isShowAddTemplate}
                            showAddItem={this.props.showAddItem}
                            showAddTemplate={this.props.showAddTemplate}
                        />
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

    selectTemplate: PropTypes.func.isRequired,
    showAddTemplate: PropTypes.func.isRequired,
    showAddItem: PropTypes.func.isRequired,
};

export default Dashboard;
