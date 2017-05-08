import React from "react";
import PropTypes from "prop-types";

class InlineForm extends React.PureComponent {
    render() {
        return (
            <div className="form-inline">
                {this.props.children}
            </div>
        );
    }
}

InlineForm.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
};

export default InlineForm;
