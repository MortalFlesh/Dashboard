import {connect} from "react-redux";
import * as actions from "./action";

import DashboardApp from "./Dashboard";

const mapStateToProps = ({dashboard}) => {
    const {
        templates,
        selectedTemplate,
        isShowAddTemplate,
        isShowAddItem,
    } = dashboard;

    return {
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
