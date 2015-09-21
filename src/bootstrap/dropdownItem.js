import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const DropdownItem = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
    },

    render() {
        const link = `#${this.props.id}`;

        return (
            <li><a href={link}>{this.props.title}</a></li>
        );
    }
});

export default DropdownItem;
