import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const ItemBody = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        url: React.PropTypes.string.isRequired,
        height: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
    },

    style() {
        return {
            height: this.props.height,
            width: this.props.width,
        };
    },

    render() {
        const style = this.style();

        return (
            <iframe src={this.props.url} style={style}/>
        );
    }
});

export default ItemBody;
