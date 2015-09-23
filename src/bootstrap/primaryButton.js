import cn from 'classnames';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const PrimaryButton = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        onClick: React.PropTypes.func.isRequired,
        children: React.PropTypes.string.isRequired,
        big: React.PropTypes.bool,
        success: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            big: false,
            success: false,
        };
    },

    render() {
        const size = this.props.big ? 'btn-lg' : 'btn-sm';
        const type = this.props.success ? 'btn-success' : 'btn-primary';

        return (
            <button type="button" className={cn('btn', size, type)} onClick={this.props.onClick}>
                {this.props.children}
            </button>
        );
    }
});

export default PrimaryButton;
