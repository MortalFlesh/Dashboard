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
        const {item, setMoving, setPosition, save, resize, setRefreshRate} = this.props;
        const style = this.style(item);

        const className = item.isMoving ? 'panel-primary' : 'panel-default';

        return (
            <div className="Item" style={style}>
                <div className={cn('panel', className)}>
                    <ItemHeader
                        item={item}
                        setMoving={setMoving}
                        setPosition={setPosition}
                        save={save}
                    />

                    <div className="panel-body" style={{padding: 0}}>
                        <ItemBody url={item.url} height={item.height} width={item.width}/>
                    </div>

                    <ItemFooter item={item} resize={resize} setRefreshRate={setRefreshRate}/>
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
    setRefreshRate: PropTypes.func,
    save: PropTypes.func,
};

Item.defaultProps = {
    setMoving() {
    },
    setPosition() {
    },
    resize() {
    },
    setRefreshRate() {
    },
    save() {
    },
};

export default Item;
