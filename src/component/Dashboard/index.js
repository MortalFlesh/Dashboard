import {connect} from "react-redux";
import * as actions from "./action";

import DashboardApp from "./Dashboard";

const mapStateToProps = ({flashMessage, dashboard, template}) => {
    const {flashMessages} = flashMessage;
    const {templates, isShowAddTemplate, isShowAddItem} = dashboard;

    return {
        flashMessages,
        template,
        templates,
        isShowAddTemplate,
        isShowAddItem,
    };
};

export default connect(
    mapStateToProps,
    actions
)(DashboardApp);
