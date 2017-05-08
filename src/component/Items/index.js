import {connect} from "react-redux";
import * as actions from "./action";

import Items from "./Items";

const mapStateToProps = ({dashboard}) => {
    const {items} = dashboard.selectedTemplate;

    return {
        items
    };
};

export default connect(
    mapStateToProps,
    actions
)(Items);
