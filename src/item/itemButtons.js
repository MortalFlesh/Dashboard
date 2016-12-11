import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import ItemRecord from "./itemRecord";
import * as actions from './actions';

const ItemButtons = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    saveHandler() {
        actions.saveItem(this.props.item);
    },

    cancelHandler() {
        // todo - cancel edit
        console.log('cancel', this.props.item.id);
    },

    render() {
        return (
            <div className="btn-group btn-group-xs" style={{float: 'right'}}>
                <button className="btn btn-primary" onClick={this.saveHandler}>Save</button>
                <button className="btn btn-danger" onClick={this.cancelHandler}>Cancel</button>
            </div>
        );
    }
});

export default ItemButtons;
