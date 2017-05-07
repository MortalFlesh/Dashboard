import React from "react";
import PrimaryButton from "./../bootstrap/primaryButton";
import * as actions from "./../dashboardApp/actions";
import PropTypes from "prop-types";

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
            actions.showAddItem(false);
        } else if (this.props.isShowAddTemplate) {
            actions.showAddTemplate(false);
        }
    }

    addItemHandler() {
        actions.showAddItem(true);
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
};

export default HeaderButtons;
