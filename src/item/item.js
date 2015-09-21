import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ItemRecord from './itemRecord';
import ItemBody from './itemBody';

const Item = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    style({width, height}) {
        return {
            maxHeight: height + 38,
            maxWidth: width,
        };
    },

    render() {
        const item = this.props.item;
        const style = this.style(item);

        return (
            <div className="Item" style={style}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">{item.name}</h3>
                    </div>
                    <div className="panel-body" style={{padding:0}}>
                        <ItemBody url={item.url} height={item.height} width={item.width}/>
                    </div>
                </div>
            </div>
        );
    }
});

export default Item;
