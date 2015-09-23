import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const FormItem = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        children: React.PropTypes.oneOfType([
            React.PropTypes.array,
            React.PropTypes.element,
        ]).isRequired,
        title: React.PropTypes.string.isRequired,
    },

    render() {
        return (
            <div className="form-group">
                <label>
                    {this.props.title}
                    {this.props.children}
                </label>
            </div>
        );
    }
});

export default FormItem;
