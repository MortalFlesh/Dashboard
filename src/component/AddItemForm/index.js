import {connect} from "react-redux";
import * as actions from "./action";

import AddItemForm from "./AddItemForm";

const mapStateToProps = ({addItem}) => {
    const {item} = addItem;

    return {
        item,
    };
};

export default connect(mapStateToProps, actions)(AddItemForm);
