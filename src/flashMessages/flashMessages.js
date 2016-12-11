import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import {List} from "immutable";
import FlashMessage from "./../flashMessage/flashMessage";

const FlashMessages = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        flashMessages: React.PropTypes.instanceOf(List).isRequired,
    },

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
});

export default FlashMessages;
