import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const PrimaryButton = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        children: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <button type="button" className="btn btn-sm btn-primary" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
});

export default PrimaryButton;
