import React from "react";
import ItemRecord from "./itemRecord";
import * as actions from "./actions";
import PropTypes from "prop-types";

class ItemButtons extends React.PureComponent {
    saveHandler() {
        actions.saveItem(this.props.item);
    }

    cancelHandler() {
        // todo - cancel edit
        console.log('cancel', this.props.item.id);
    }

    render() {
        return (
            <div className="btn-group btn-group-xs" style={{float: 'right'}}>
                <button className="btn btn-primary" onClick={this.saveHandler}>Save</button>
                <button className="btn btn-danger" onClick={this.cancelHandler}>Cancel</button>
            </div>
        );
    }
}

ItemButtons.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
};

export default ItemButtons;
