import React from "react";
import PropTypes from "prop-types";

class Container extends React.PureComponent {
    render() {
        return (
            <div className="container-fluid theme-showcase" role="main">
                {this.props.children}
            </div>
        );
    }
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
};

export default Container;
