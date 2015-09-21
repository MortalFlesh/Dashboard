import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Header = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        children: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <div className="page-header">
                <h1>{this.props.children}</h1>
            </div>
        );
    }
});

export default Header;
