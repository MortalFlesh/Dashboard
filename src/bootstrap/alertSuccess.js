import React from "react";
import PropTypes from "prop-types";

class AlertSuccess extends React.PureComponent {
    render() {
        return (
            <div className="alert alert-success" role="alert">
                {this.props.children}
            </div>
        );
    }
}

AlertSuccess.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
        PropTypes.string,
    ]).isRequired
};

export default AlertSuccess;
