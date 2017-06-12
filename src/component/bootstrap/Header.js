import React from "react";
import PropTypes from "prop-types";

class Header extends React.PureComponent {
    render() {
        return (
            <div className="page-header">
                {this.props.children}
            </div>
        );
    }
}

Header.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element,
    ]).isRequired,
};

export default Header;
