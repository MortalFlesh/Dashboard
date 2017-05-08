import React from "react";
import {List} from "immutable";
import PropTypes from "prop-types";

class DropdownMenu extends React.PureComponent {
    render() {
        return (
            <ul className="dropdown-menu">
                {this.props.items}
            </ul>
        );
    }
}

DropdownMenu.propTypes = {
    items: PropTypes.instanceOf(List).isRequired,
};

export default DropdownMenu;
