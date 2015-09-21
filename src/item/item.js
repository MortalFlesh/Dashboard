import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ItemRecord from './itemRecord';

const Item = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    render() {
        return (
            <div className="Item">
                ... {this.props.item.name} ...
            </div>
        );
    }
});

export default Item;
