import React from "react";
import PropTypes from "prop-types";
import ItemRecord from "./../record";

class ItemButtons extends React.PureComponent {
    saveHandler() {
        this.props.save(this.props.item);
    }

    cancelHandler() {
        // todo - cancel edit
        console.log('cancel', this.props.item.id);
    }

    render() {
        return (
            <div className="btn-group btn-group-xs" style={{float: 'right'}}>
                <button className="btn btn-primary" onClick={this.saveHandler.bind(this)}>
                    Save
                </button>
                <button className="btn btn-danger" onClick={this.cancelHandler.bind(this)}>
                    Cancel
                </button>
            </div>
        );
    }
}

ItemButtons.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
    save: PropTypes.func.isRequired,
};

export default ItemButtons;
