import React from "react";
import PropTypes from "prop-types";

class ItemBody extends React.PureComponent {
    style() {
        const {height, width} = this.props;

        return {
            height,
            width,
        };
    }

    containerStyle({height, width}) {
        const scrollerHeight = 20;
        const scrollerWidth = 20;

        return {
            height: height - scrollerHeight,
            width: width - scrollerWidth,
            overflow: 'hidden',
        };
    }

    render() {
        const style = this.style();

        return (
            <div className="ItemBody" style={this.containerStyle(style)}>
                <iframe src={this.props.url} style={style}/>
            </div>
        );
    }
}

ItemBody.propTypes = {
    url: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
};

export default ItemBody;
