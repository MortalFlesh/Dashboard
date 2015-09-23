import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Form = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element,
        ]).isRequired,
    },

    render() {
        return (
            <div className="form-horizontal">
                {this.props.children}
            </div>
        );
    }
});

export default Form;
