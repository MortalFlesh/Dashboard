import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ItemRecord from './itemRecord';
import ItemHeader from './itemHeader';
import ItemBody from './itemBody';
import ItemFooter from './itemFooter';

const Item = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    style({top, left, width, height}) {
        return {
            position: 'absolute',
            top,
            left,
            maxHeight: height + 38,
            maxWidth: width,
            zIndex: this.props.item.isMoving ? 10000 : 0,
        };
    },

    render() {
        const item = this.props.item;
        const style = this.style(item);

        const className = item.isMoving ? 'panel-primary' : 'panel-default';    // todo cn()

        return (
            <div className="Item" style={style}>
                <div className={`panel ${className}`}>
                    <ItemHeader item={item}/>

                    <div className="panel-body" style={{padding:0}}>
                        <ItemBody url={item.url} height={item.height} width={item.width}/>
                    </div>

                    <ItemFooter item={item}/>
                </div>
            </div>
        );
    }
});

export default Item;
