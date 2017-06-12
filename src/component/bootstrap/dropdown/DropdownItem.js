import React from "react";
import PropTypes from "prop-types";

class DropdownItem extends React.PureComponent {
    render() {
        const {id, title, onClick} = this.props;

        return (
            <li>
                <a onClick={() => {onClick(id)}}>
                    {title}
                </a>
            </li>
        );
    }
}

DropdownItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default DropdownItem;
