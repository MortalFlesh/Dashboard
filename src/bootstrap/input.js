import React from "react";
import PropTypes from "prop-types";

class Input extends React.PureComponent {
    render() {
        const {type, onChange} = this.props;

        const inputProps = {
            onChange(event) {
                onChange(event.target.value);
            },
            type,
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
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
};

Input.defaultProps = {
    className: 'form-control',
    id: '',
    placeholder: '',
    value: '',
    checked: false,
    disabled: false,
};

export default Input;
