import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const AlertSuccess = React.createClass({
    mixins: [PureRenderMixin],

    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element,
        React.PropTypes.string,
    ]).isRequired,

    render() {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.children}
            </div>
        );
    }
});

export default AlertSuccess;
