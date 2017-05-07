import {List} from "immutable";
import React from "react";
import Item from "./../item/item";
import PropTypes from "prop-types";

class Items extends React.PureComponent {
    style() {
        return {
            position: 'relative',
        };
    }

    render() {
        const items = this.props.items.map((item) => {
            return <Item key={item.id} item={item}/>;
        });

        return (
            <div className="Items" style={this.style()}>
                {items}
            </div>
        );
    }
}

Items.propTypes = {
    items: PropTypes.instanceOf(List).isRequired,
};

export default Items;
