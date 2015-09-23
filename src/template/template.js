import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './actions';
import TemplateRecord from './../template/templateRecord';
import Container from './../bootstrap/container';
import Header from './../bootstrap/header';
import PrimaryButton from './../bootstrap/primaryButton';
import Items from './../items/items';

const Template = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    addItemHandler() {
        actions.showAddItem(true);
    },

    render() {
        const template = this.props.template;

        return (
            <Container>
                <Header>
                    <PrimaryButton onClick={this.addItemHandler}>+ Item</PrimaryButton>
                </Header>

                <Items items={template.items}/>
            </Container>
        );
    }
});

export default Template;
