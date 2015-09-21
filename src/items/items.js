import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Item from './../item/item';

const Items = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        items: React.PropTypes.instanceOf(List).isRequired,
    },

    render() {
        const items = this.props.items.map((item) => {
            return <Item key={item.id} item={item}/>;
        });

        return (
            <div className="Items">
                {items}
            </div>
        );
    }
});

export default Items;
