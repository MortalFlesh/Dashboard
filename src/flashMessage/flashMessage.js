import React from "react";
import PropTypes from "prop-types";
import FlashMessageRecord from "./flashMessageRecord";
import AlertSuccess from "./../bootstrap/alertSuccess";

class FlashMessage extends React.PureComponent {
    render() {
        let message = this.props.flashMessage.message;

        if (message instanceof Array) {
            message = message.map((item, i) => <span key={i}>{item}</span>);
        }

        if (this.props.flashMessage.type === 'success') {
            return (
                <AlertSuccess>
                    {message}
                </AlertSuccess>
            );
        }
    }
}

FlashMessage.propTypes = {
    flashMessage: PropTypes.instanceOf(FlashMessageRecord).isRequired,
};

export default FlashMessage;
