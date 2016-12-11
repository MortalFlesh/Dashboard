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
        if (this.props.flashMessage.type === 'success') {
            return (
                <AlertSuccess>
                    {this.props.flashMessage.message}
                </AlertSuccess>
            );
        }
    }
});

export default FlashMessage;
