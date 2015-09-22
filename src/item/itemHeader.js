import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './actions';
import ItemRecord from './itemRecord';

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

    onMouseDown(event) {
        if (!this.props.item.isMoving) {
            console.log('mouseDown', event);
            actions.setMoving({id: this.props.item.id, isMoving: true});
        }
    },

    onMouseMove(event) {
        if (this.props.item.isMoving) {
            console.log('mouseMove', event);
            const top = 30;
            const left = this.props.item.left + 10;

            actions.setItemPosition({id: this.props.item.id, top, left});
        }
    },

    onMouseUp(event) {
        if (this.props.item.isMoving) {
            console.log('mouseUp', event);
            actions.setMoving({id: this.props.item.id, isMoving: false});
        }
    },

    render() {
        return (
            <div className="panel-heading"
                 style={this.style()}
                 onMouseDown={this.onMouseDown}
                 onMouseMove={this.onMouseMove}
                 onMouseUp={this.onMouseUp}>
                <h3 className="panel-title">{this.props.item.title}</h3>
            </div>
        );
    }
});

export default ItemHeader;
