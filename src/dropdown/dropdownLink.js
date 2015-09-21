import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const DropdownLink = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <a href="#"
               className="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">{this.props.title} <span className="caret"></span></a>
        );
    }
});

export default DropdownLink;
