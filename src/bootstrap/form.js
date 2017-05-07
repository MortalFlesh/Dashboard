import React from "react";
import PropTypes from "prop-types";

class Form extends React.PureComponent {
    render() {
        return (
            <div className="form-horizontal">
                {this.props.children}
            </div>
        );
    }
}

Form.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
};

export default Form;
