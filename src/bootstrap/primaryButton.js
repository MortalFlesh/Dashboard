import cn from 'classnames';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const PrimaryButton = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        children: React.PropTypes.string.isRequired,
        big: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            big: false,
        };
    },

    render() {
        const className = this.props.big ? 'btn-lg' : 'btn-sm';

        return (
            <button type="button" className={cn('btn', 'btn-primary', className)} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
});

export default PrimaryButton;
