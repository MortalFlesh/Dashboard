import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './actions';

const ItemHeader = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        isMoving: React.PropTypes.bool.isRequired,
    },

    style() {
        return {
            cursor: 'move',
        };
    },

    onMouseDown(event) {
        if (!this.props.isMoving) {
            console.log('mouseDown', event);
            actions.setMoving({id: this.props.id, isMoving: true});
        }
    },

    onMouseMove(event) {
        if (this.props.isMoving) {
            console.log('mouseMove', event);
        }
    },

    onMouseUp(event) {
        if (this.props.isMoving) {
            console.log('mouseUp', event);
            actions.setMoving({id: this.props.id, isMoving: false});
        }
    },

    render() {
        return (
            <div className="panel-heading"
                 style={this.style()}
                 onMouseDown={this.onMouseDown}
                 onMouseMove={this.onMouseMove}
                 onMouseUp={this.onMouseUp}>
                <h3 className="panel-title">{this.props.title}</h3>
            </div>
        );
    }
});

export default ItemHeader;
