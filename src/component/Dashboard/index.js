import {connect} from "react-redux";
import * as actions from "./action";

import DashboardApp from "./Dashboard";

const mapStateToProps = ({dashboard, addItem, addTemplate}) => {
    const {
        flashMessages,
        templates,
        selectedTemplate,
        showAddTemplate,
        showAddItem,
    } = dashboard;

    return {
        flashMessages,
        template: selectedTemplate,
        templates,
        isShowAddTemplate: showAddTemplate,
        isShowAddItem: showAddItem,
        addItem,
        addTemplate,
    };
};

export default connect(
    mapStateToProps,
    actions
)(DashboardApp);
