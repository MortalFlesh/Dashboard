import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import PrimaryButton from './../bootstrap/primaryButton';
import * as actions from './../dashboardApp/actions';

const HeaderButtons = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        isShowAddItem: React.PropTypes.bool.isRequired,
        isShowAddTemplate: React.PropTypes.bool.isRequired,
    },

    header() {
        if (this.props.isShowAddItem || this.props.isShowAddTemplate) {
            return <PrimaryButton onClick={this.backHandler}>{'< Back'}</PrimaryButton>;
        } else {
            return <PrimaryButton onClick={this.addItemHandler}>+ Item</PrimaryButton>;
        }
    },

    backHandler() {
        if (this.props.isShowAddItem) {
            actions.showAddItem(false);
        } else if (this.props.isShowAddTemplate) {
            actions.showAddTemplate(false);
        }
    },

    addItemHandler() {
        actions.showAddItem(true);
    },

    render() {
        return (
            <div className="HeaderButtons">
                {this.header()}
            </div>
        );
    }
});

export default HeaderButtons;
