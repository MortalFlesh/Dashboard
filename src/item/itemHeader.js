import React from "react";
import PropTypes from "prop-types";
import * as actions from "./actions";
import ItemRecord from "./itemRecord";
import ItemButtons from "./itemButtons";

class ItemHeader extends React.PureComponent {
    style() {
        return {
            cursor: 'move',
        };
    }

    onMouseDown({pageX, pageY}) {
        const {item} = this.props;

        if (!item.isMoving) {
            const innerX = pageX - item.left;
            const innerY = pageY - item.top;

            actions.setMoving({id: item.id, isMoving: true, innerX, innerY});
        }
    }

    onMouseMove({pageX, pageY}) {
        const {item} = this.props;

        if (item.isMoving) {
            const top = pageY - item.innerY;
            const left = pageX - item.innerX;

            actions.setItemPosition({id: item.id, top, left});
        }
    }

    onMouseUp(event) {
        const {item} = this.props;

        if (item.isMoving) {
            actions.setMoving({id: item.id, isMoving: false, innerX: 0, innerY: 0});
        }
    }

    render() {
        const {item} = this.props;

        return (
            <div className="panel-heading"
                 style={this.style()}
                 onMouseDown={this.onMouseDown}
                 onMouseMove={this.onMouseMove}
                 onMouseUp={this.onMouseUp}>

                {item.isShowSaveButton ? <ItemButtons item={item}/> : null}

                <h3 className="panel-title">{item.name}</h3>
            </div>
        );
    }
}

ItemHeader.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
};

export default ItemHeader;
