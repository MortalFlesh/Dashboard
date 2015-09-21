import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const DropdownMenu = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        items: React.PropTypes.instanceOf(List).isRequired,
    },

    render() {
        return (
            <ul className="dropdown-menu">
                {this.props.items}
            </ul>
        );
    }
});

export default DropdownMenu;
