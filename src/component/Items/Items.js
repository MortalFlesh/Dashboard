import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";

import Item from "./../Item";

class Items extends React.PureComponent {
    style() {
        return {
            position: 'relative',
        };
    }

    render() {
        const items = this.props.items.map((item) =>
            <Item key={item.id}
                  item={item}
                  setMoving={this.props.setMoving}
                  setPosition={this.props.setPosition}
                  resize={this.props.resize}
                  save={this.props.save}
            />
        );

        return (
            <div className="Items" style={this.style()}>
                {items}
            </div>
        );
    }
}

Items.propTypes = {
    items: PropTypes.instanceOf(List).isRequired,
    setMoving: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    resize: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
};

export default Items;
