import React from "react";
import PropTypes from "prop-types";

import PrimaryButton from "./../bootstrap/primaryButton";

class HeaderButtons extends React.PureComponent {
    header() {
        if (this.props.isShowAddItem || this.props.isShowAddTemplate) {
            return <PrimaryButton onClick={this.backHandler}>{'< Back'}</PrimaryButton>;
        } else {
            return <PrimaryButton onClick={this.addItemHandler}>+ Item</PrimaryButton>;
        }
    }

    backHandler() {
        if (this.props.isShowAddItem) {
            this.props.showAddItem(false);
        } else if (this.props.isShowAddTemplate) {
            this.props.showAddTemplate(false);
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
