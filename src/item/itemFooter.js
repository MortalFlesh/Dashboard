import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './actions';
import ItemRecord from './itemRecord';
import InlineForm from './../bootstrap/inlineForm';
import FormItem from './../bootstrap/formItem';
import Input from './../bootstrap/input';

const ItemFooter = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        item: React.PropTypes.instanceOf(ItemRecord).isRequired,
    },

    heightChangeHandler(heightString) {
        const item = this.props.item;
        const height = parseInt(heightString, 10);

        actions.resizeItem({id: item.id, height, width: item.width});
    },
    
    widthChangeHandler(widthString) {
        const item = this.props.item;
        const width = parseInt(widthString, 10);

        actions.resizeItem({id: item.id, height: item.height, width});
    },
    
    render() {
        const item = this.props.item;

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
                               onChange={() => {}}
                               disabled={true}/>
                    </FormItem>

                </InlineForm>
            </div>
        );
    }
});

export default ItemFooter;
