import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import TemplateRecord from "../Template/record";

import FlashMessagesApp from "../FlashMessages";
import AddItemFormApp from "../AddItemForm";
import AddTemplateFormApp from "../AddTemplateForm";
import DashboardMenu from "../DashboardMenu";
import HeaderButtons from "../HeaderButtons";
import Container from "../bootstrap/Container";
import Header from "../bootstrap/Header";
import TemplateApp from "../Template";

class Dashboard extends React.PureComponent {
    constructor(props) {
        super(props);

        this.props.load();
    }

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
            return <TemplateApp/>;
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
    flashMessages: PropTypes.instanceOf(List).isRequired,

    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    templates: PropTypes.instanceOf(List).isRequired,

    isShowAddItem: PropTypes.bool.isRequired,
    isShowAddTemplate: PropTypes.bool.isRequired,

    load: PropTypes.func.isRequired,
    selectTemplate: PropTypes.func.isRequired,
    showAddTemplate: PropTypes.func.isRequired,
    showAddItem: PropTypes.func.isRequired,
};

export default Dashboard;
