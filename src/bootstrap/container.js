import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Container = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element,
        ]).isRequired,
    },

    render() {
        return (
            <div className="container-fluid theme-showcase" role="main">
                {this.props.children}
            </div>
        );
    }
});

export default Container;
