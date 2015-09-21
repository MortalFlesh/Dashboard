import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ItemHeader = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: React.PropTypes.string.isRequired,

    style() {
        return {
            cursor: 'move',
        };
    },

    render() {
        return (
            <div className="panel-heading" style={this.style()}>
                <h3 className="panel-title">{this.props.title}</h3>
            </div>
        );
    }
});

export default ItemHeader;
