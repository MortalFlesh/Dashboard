import {connect} from "react-redux";
import FlashMessages from "./FlashMessages";

const mapStateToProps = ({flashMessage}) => {
    const {flashMessages} = flashMessage;

    return {
        flashMessages,
    };
};

export default connect(
    mapStateToProps
)(FlashMessages);
