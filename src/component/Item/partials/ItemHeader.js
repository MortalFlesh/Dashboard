import React from "react";
import PropTypes from "prop-types";
import ItemRecord from "./../record";
import MovingRecord from "./../../Items/record/movingRecord";
import PositionRecord from "./../../Items/record/positionRecord";

import ItemButtons from "./ItemButtons";

class ItemHeader extends React.PureComponent {
    style() {
        return {
            cursor: 'move',
        };
    }

    onMouseDown({pageX, pageY}) {
        const {id, isMoving, left, top} = this.props.item;

        if (!isMoving) {
            const innerX = pageX - left;
            const innerY = pageY - top;

            this.props.setMoving(new MovingRecord({id, isMoving: true, innerX, innerY}));
        }
    }

    onMouseMove({pageX, pageY}) {
        const {id, isMoving, innerX, innerY} = this.props.item;

        if (isMoving) {
            const top = pageY - innerY;
            const left = pageX - innerX;

            this.props.setPosition(new PositionRecord({id, top, left}));
        }
    }

    onMouseUp(event) {
        const {id, isMoving} = this.props.item;

        if (isMoving) {
            this.props.setMoving(new MovingRecord({id}));
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

                {item.isShowSaveButton ? <ItemButtons item={item} save={this.props.save}/> : null}

                <h3 className="panel-title">{item.name}</h3>
            </div>
        );
    }
}

ItemHeader.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
    setMoving: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
};

export default ItemHeader;
