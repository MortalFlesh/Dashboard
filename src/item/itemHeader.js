import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import * as actions from "./actions";
import ItemRecord from "./itemRecord";
import ItemButtons from "./itemButtons";

const ItemHeader = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    style() {
        return {
            cursor: 'move',
        };
    },

    onMouseDown({pageX, pageY}) {
        const item = this.props.item;

        if (!item.isMoving) {
            const innerX = pageX - item.left;
            const innerY = pageY - item.top;

            actions.setMoving({id: item.id, isMoving: true, innerX, innerY});
        }
    },

    onMouseMove({pageX, pageY}) {
        const item = this.props.item;

        if (item.isMoving) {
            const top = pageY - item.innerY;
            const left = pageX - item.innerX;

            actions.setItemPosition({id: item.id, top, left});
        }
    },

    onMouseUp(event) {
        const item = this.props.item;

        if (item.isMoving) {
            actions.setMoving({id: item.id, isMoving: false, innerX: 0, innerY: 0});
        }
    },

    render() {
        return (
            <div className="panel-heading"
                 style={this.style()}
                 onMouseDown={this.onMouseDown}
                 onMouseMove={this.onMouseMove}
                 onMouseUp={this.onMouseUp}>

                <ItemButtons/>

                <h3 className="panel-title">{this.props.item.name}</h3>
            </div>
        );
    }
});

export default ItemHeader;
