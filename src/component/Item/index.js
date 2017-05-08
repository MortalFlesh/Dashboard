import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import ItemRecord from "./record";

import ItemHeader from "./partials/ItemHeader";
import ItemBody from "./partials/ItemBody";
import ItemFooter from "./partials/ItemFooter";

class Item extends React.PureComponent {
    style({top, left, width, height}) {
        return {
            position: 'absolute',
            top,
            left,
            maxHeight: height + 38,
            maxWidth: width,
            zIndex: this.props.item.isMoving ? 10000 : 0,
        };
    }

    render() {
        const {item} = this.props;
        const style = this.style(item);

        const className = item.isMoving ? 'panel-primary' : 'panel-default';

        return (
            <div className="Item" style={style}>
                <div className={cn('panel', className)}>
                    <ItemHeader
                        item={item}
                        setMoving={this.props.setMoving}
                        setPosition={this.props.setPosition}
                        save={this.props.save}
                    />

                    <div className="panel-body" style={{padding: 0}}>
                        <ItemBody url={item.url} height={item.height} width={item.width}/>
                    </div>

                    <ItemFooter item={item} resize={this.props.resize}/>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
    setMoving: PropTypes.func,
    setPosition: PropTypes.func,
    resize: PropTypes.func,
    save: PropTypes.func,
};

Item.defaultProps = {
    setMoving() {
    },
    setPosition() {
    },
    resize() {
    },
    save() {
    },
};

export default Item;
