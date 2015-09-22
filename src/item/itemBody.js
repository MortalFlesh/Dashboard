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

    containerStyle({height, width}) {
        const scrollerHeight = 20;
        const scrollerWidth = 20;

        return {
            height: height - scrollerHeight,
            width: width - scrollerWidth,
            overflow: 'hidden',
        };
    },

    render() {
        const style = this.style();
        const containerStyle = this.containerStyle(style);

        return (
            <div className="ItemBody" style={containerStyle}>
                <iframe src={this.props.url} style={style}/>
            </div>
        );
    }
});

export default ItemBody;
