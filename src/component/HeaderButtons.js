import React from "react";
import PropTypes from "prop-types";

import PrimaryButton from "./bootstrap/PrimaryButton";

class HeaderButtons extends React.PureComponent {
    header() {
        if (this.props.isShowAddItem || this.props.isShowAddTemplate) {
            return <PrimaryButton onClick={this.backHandler.bind(this)}>{'< Back'}</PrimaryButton>;
        } else {
            return <PrimaryButton onClick={this.addItemHandler.bind(this)}>+ Item</PrimaryButton>;
        }
    }

    backHandler() {
        const {isShowAddItem, showAddItem, isShowAddTemplate, showAddTemplate} = this.props;

        if (isShowAddItem) {
            showAddItem(false);
        } else if (isShowAddTemplate) {
            showAddTemplate(false);
        }
    }

    addItemHandler() {
        this.props.showAddItem(true);
    }

    render() {
        return (
            <div className="HeaderButtons">
                {this.header()}
            </div>
        );
    }
}

HeaderButtons.propTypes = {
    isShowAddItem: PropTypes.bool.isRequired,
    isShowAddTemplate: PropTypes.bool.isRequired,
    showAddItem: PropTypes.func.isRequired,
    showAddTemplate: PropTypes.func.isRequired,
};

export default HeaderButtons;
