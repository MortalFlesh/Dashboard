import {connect} from "react-redux";
import * as actions from "./action";

import AddTemplateForm from "./AddTemplateForm";

const mapStateToProps = ({addTemplate}) => {
    const {template} = addTemplate;

    return {
        template,
    };
};

export default connect(
    mapStateToProps,
    actions
)(AddTemplateForm);
