import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import AlertSuccess from "./../bootstrap/alertSuccess";
import FlashMessageRecord from "./flashMessageRecord";

const FlashMessage = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        flashMessage: React.PropTypes.instanceOf(FlashMessageRecord).isRequired,
    },

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
});

export default FlashMessage;
