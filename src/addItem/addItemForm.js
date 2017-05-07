import React from "react";
import * as actions from "./actions";
import Header from "./../bootstrap/header";
import PrimaryButton from "./../bootstrap/primaryButton";
import Form from "./../bootstrap/form";
import FormItem from "./../bootstrap/formItem";
import Input from "./../bootstrap/input";
import ItemRecord from "./../item/itemRecord";
import Item from "./../item/item";
import PropTypes from "prop-types";

class AddItemForm extends React.PureComponent {

    nameChangeHandler(name) {
        actions.setAddItemName(name);
    }

    urlChangeHandler(url) {
        actions.setAddItemUrl(url);
    }

    refreshRateChangeHandler(refreshRate) {
        actions.setAddItemRefreshRate(number(refreshRate));
    }

    heightChangeHandler(height) {
        actions.setAddItemHeight(number(height));
    }

    widthChangeHandler(width) {
        actions.setAddItemWidth(number(width));
    }

    saveHandler() {
        actions.addItem();
    }

    render() {
        const item = this.props.item;

        return (
            <div>
                <h2>Add new item</h2>

                <Form>

                    <FormItem id="add-item-name" title="Name:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item name"
                               id="add-item-name"
                               value={item.name}
                               onChange={this.nameChangeHandler}/>
                    </FormItem>

                    <FormItem id="add-item-url" title="URL:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item URL"
                               id="add-item-url"
                               value={item.url}
                               onChange={this.urlChangeHandler}/>
                    </FormItem>

                    <FormItem id="add-item-refresh-rate" title="Refresh rate:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item refresh rate"
                               id="add-item-refresh-rate"
                               value={item.refreshRate.toString()}
                               onChange={this.refreshRateChangeHandler}/>
                    </FormItem>

                    <FormItem id="add-item-height" title="Height:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item height"
                               id="add-item-height"
                               value={item.height.toString()}
                               onChange={this.heightChangeHandler}/>
                    </FormItem>

                    <FormItem id="add-item-width" title="Width:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item width"
                               id="add-item-width"
                               value={item.width.toString()}
                               onChange={this.widthChangeHandler}/>
                    </FormItem>

                    <FormItem id="" title="" sizeLabel={1} size={10}>
                        <PrimaryButton big={true} onClick={this.saveHandler}>
                            Save item
                        </PrimaryButton>
                    </FormItem>

                </Form>

                <Header>
                    <h3>Preview:</h3>
                </Header>

                <div style={{position: 'relative'}}>
                    <Item item={item}/>
                </div>
            </div>
        );
    }
}

AddItemForm.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
};

function number(string) {
    return parseInt(string, 10);
}

export default AddItemForm;
