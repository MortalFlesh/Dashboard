import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import ItemRecord from "./itemRecord";
import ItemHeader from "./itemHeader";
import ItemBody from "./itemBody";
import ItemFooter from "./itemFooter";

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
                    <ItemHeader item={item}/>

                    <div className="panel-body" style={{padding: 0}}>
                        <ItemBody url={item.url} height={item.height} width={item.width}/>
                    </div>

                    <ItemFooter item={item}/>
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
};

export default Item;
