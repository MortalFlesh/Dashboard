import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import FlashMessage from "./../flashMessage/flashMessage";

class FlashMessages extends React.PureComponent {
    render() {
        const flashMessages = this.props.flashMessages.map((flashMessage, i) => {
            return <FlashMessage key={i} flashMessage={flashMessage}/>;
        });

        return (
            <div className="FlashMessages">
                {flashMessages}
            </div>
        );
    }
}

FlashMessages.propTypes = {
    flashMessages: PropTypes.instanceOf(List).isRequired,
};

export default FlashMessages;
