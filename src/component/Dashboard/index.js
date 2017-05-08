import {connect} from "react-redux";
import * as actions from "./action";

import DashboardApp from "./Dashboard";

const mapStateToProps = ({flashMessage, dashboard}) => {
    const {flashMessages} = flashMessage;
    const {
        templates,
        selectedTemplate,
        isShowAddTemplate,
        isShowAddItem,
    } = dashboard;

    return {
        flashMessages,
        template: selectedTemplate,
        templates,
        isShowAddTemplate,
        isShowAddItem,
    };
};

export default connect(
    mapStateToProps,
    actions
)(DashboardApp);
