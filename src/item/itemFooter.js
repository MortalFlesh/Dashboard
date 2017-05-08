import React from "react";
import PropTypes from "prop-types";
import * as actions from "./actions";
import ItemRecord from "./itemRecord";
import InlineForm from "./../component/bootstrap/InlineForm";
import FormItem from "./../component/bootstrap/FormItem";
import Input from "./../component/bootstrap/Input";

class ItemFooter extends React.PureComponent {
    heightChangeHandler(heightString) {
        const {item} = this.props;
        const height = parseInt(heightString, 10);

        actions.resizeItem({id: item.id, height, width: item.width});
    }

    widthChangeHandler(widthString) {
        const {item} = this.props;
        const width = parseInt(widthString, 10);

        actions.resizeItem({id: item.id, height: item.height, width});
    }

    render() {
        const {item} = this.props;

        const heightId = `item-${item.id}-footer-height`;
        const widthId = `item-${item.id}-footer-width`;
        const refreshRateId = `item-${item.id}-footer-refreshRate`;

        return (
            <div className="panel-footer">
                <InlineForm>

                    <FormItem id={heightId} title="Height:">
                        <Input type="text"
                               id={heightId}
                               value={item.height.toString()}
                               onChange={this.heightChangeHandler}/>
                    </FormItem>

                    <FormItem id={widthId} title="Width:">
                        <Input type="text"
                               id={widthId}
                               value={item.width.toString()}
                               onChange={this.widthChangeHandler}/>
                    </FormItem>

                    <FormItem id={refreshRateId} title="Refresh rate:">
                        <Input type="text"
                               id={refreshRateId}
                               value={item.refreshRate.toString()}
                               onChange={() => {
                                   // todo
                               }}
                               disabled={true}/>
                    </FormItem>

                </InlineForm>
            </div>
        );
    }
}

ItemFooter.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
};

export default ItemFooter;
