import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Input = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        onChange: React.PropTypes.func.isRequired,
        type: React.PropTypes.string.isRequired,
        className: React.PropTypes.string,
        id: React.PropTypes.string,
        placeholder: React.PropTypes.string,
        value: React.PropTypes.string,
        checked: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
    },

    getDefaultProps() {
        return {
            className: 'form-control',
            id: '',
            placeholder: '',
            value: '',
            checked: false,
            disabled: false,
        };
    },

    handleChange(event) {
        var value = event.target.value;

        this.props.onChange(value);
    },

    render() {
        const inputProps = {
            onChange: this.handleChange,
            type: this.props.type,
        };

        ['className', 'id', 'placeholder', 'value', 'checked', 'disabled'].forEach((property) => {
            const value = this.props[property];

            if (value) {
                inputProps[property] = value;
            }
        });

        return (
            <input {...inputProps} />
        );
    }
});

export default Input;
