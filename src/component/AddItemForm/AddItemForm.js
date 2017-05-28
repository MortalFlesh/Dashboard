import React from "react";
import PropTypes from "prop-types";
import {number} from "./../../service/utils";
import ItemRecord from "./../Item/record";

import Header from "./../bootstrap/Header";
import PrimaryButton from "./../bootstrap/PrimaryButton";
import Form from "./../bootstrap/Form";
import FormItem from "./../bootstrap/FormItem";
import Input from "./../bootstrap/Input";
import Item from "./../Item";

class AddItemForm extends React.PureComponent {

    refreshRateChangeHandler(refreshRate) {
        this.props.setRefreshRate(number(refreshRate));
    }

    heightChangeHandler(height) {
        this.props.setHeight(number(height));
    }

    widthChangeHandler(width) {
        this.props.setWidth(number(width));
    }

    saveHandler() {
        const {save, item} = this.props;

        save(item);
    }

    render() {
        const {item} = this.props;

        return (
            <div>
                <h2>Add new item</h2>

                <Form>

                    <FormItem id="add-item-name" title="Name:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item name"
                               id="add-item-name"
                               value={item.name}
                               onChange={this.props.setName}/>
                    </FormItem>

                    <FormItem id="add-item-url" title="URL:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item URL"
                               id="add-item-url"
                               value={item.url}
                               onChange={this.props.setUrl}/>
                    </FormItem>

                    <FormItem id="add-item-refresh-rate" title="Refresh rate:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item refresh rate"
                               id="add-item-refresh-rate"
                               value={item.refreshRate.toString()}
                               onChange={this.refreshRateChangeHandler.bind(this)}/>
                    </FormItem>

                    <FormItem id="add-item-height" title="Height:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item height"
                               id="add-item-height"
                               value={item.height.toString()}
                               onChange={this.heightChangeHandler.bind(this)}/>
                    </FormItem>

                    <FormItem id="add-item-width" title="Width:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Item width"
                               id="add-item-width"
                               value={item.width.toString()}
                               onChange={this.widthChangeHandler.bind(this)}/>
                    </FormItem>

                    <FormItem id="" title="" sizeLabel={1} size={10}>
                        <PrimaryButton big={true} onClick={this.saveHandler.bind(this)}>
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
    save: PropTypes.func.isRequired,
    setHeight: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
    setRefreshRate: PropTypes.func.isRequired,
    setUrl: PropTypes.func.isRequired,
    setWidth: PropTypes.func.isRequired,
};

export default AddItemForm;
