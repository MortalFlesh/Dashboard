import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const DropdownItem = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        onClick: React.PropTypes.func.isRequired,
    },

    clickHandler() {
        this.props.onClick(this.props.id);
    },

    render() {
        return (
            <li><a onclick={this.clickHandler}>{this.props.title}</a></li>
        );
    }
});

export default DropdownItem;
