import React from "react";
import PropTypes from "prop-types";

class DropdownLink extends React.PureComponent {
    render() {
        return (
            <a href="#"
               className="dropdown-toggle"
               data-toggle="dropdown"
               role="button"
               aria-haspopup="true"
               aria-expanded="false">
                {this.props.title} <span className="caret"/>
            </a>
        );
    }
}

DropdownLink.propTypes = {
    title: PropTypes.string.isRequired,
};

export default DropdownLink;
