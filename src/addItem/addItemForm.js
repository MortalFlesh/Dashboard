import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './../template/actions';
import Container from './../bootstrap/container';
import Header from './../bootstrap/header';
import PrimaryButton from './../bootstrap/primaryButton';
import Form from './../bootstrap/form';
import FormItem from './../bootstrap/formItem';
import Input from './../bootstrap/input';

const AddItemForm = React.createClass({
    mixins: [PureRenderMixin],

    backHandler() {
        actions.showAddItem(false);
    },
    
    handler() {
        
    },

    render() {
        return (
            <Container>
                <Header>
                    <PrimaryButton onClick={this.backHandler}>{'< Back'}</PrimaryButton>
                </Header>

                <h2>Add new item</h2>

                <Form>

                    <FormItem id="add-item-name" title="Name:" sizeLabel={1} size={10}>
                        <Input type="text" id="add-item-name" onChange={this.handler}/>
                    </FormItem>

                    <FormItem id="add-item-url" title="URL:" sizeLabel={1} size={10}>
                        <Input type="text" id="add-item-url" onChange={this.handler}/>
                    </FormItem>

                    <FormItem id="add-item-refresh-rate" title="Refresh rate:" sizeLabel={1} size={10}>
                        <Input type="text" id="add-item-refresh-rate" onChange={this.handler}/>
                    </FormItem>

                    <FormItem id="add-item-height" title="Height:" sizeLabel={1} size={10}>
                        <Input type="text" id="add-item-height" onChange={this.handler}/>
                    </FormItem>

                    <FormItem id="add-item-width" title="Width:" sizeLabel={1} size={10}>
                        <Input type="text" id="add-item-width" onChange={this.handler}/>
                    </FormItem>

                </Form>

                <div>
                    ... preview ...
                </div>
            </Container>
        );
    }
});

export default AddItemForm;
