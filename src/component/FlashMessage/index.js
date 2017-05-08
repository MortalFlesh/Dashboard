import React from "react";
import PropTypes from "prop-types";
import FlashMessageRecord from "./record";

import AlertSuccess from "./../../bootstrap/alertSuccess";

class FlashMessage extends React.PureComponent {
    render() {
        const {flashMessage} = this.props;
        let {message, type} = flashMessage;

        if (message instanceof Array) {
            message = message.map((item, i) => <span key={i}>{item}</span>);
        }

        if (type === 'success') {
            return (
                <AlertSuccess>
                    {message}
                </AlertSuccess>
            );
        }

        return <div/>
    }
}

FlashMessage.propTypes = {
    flashMessage: PropTypes.instanceOf(FlashMessageRecord).isRequired,
};

export default FlashMessage;
