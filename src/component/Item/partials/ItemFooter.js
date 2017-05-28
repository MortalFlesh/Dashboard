import React from "react";
import PropTypes from "prop-types";
import {number} from "./../../../service/utils";
import ItemRecord from "./../record";
import ResizeRecord from "./../record/resizeRecord";
import RefreshRateRecord from "./../record/refreshRateRecord";

import InlineForm from "./../../bootstrap/InlineForm";
import FormItem from "./../../bootstrap/FormItem";
import Input from "./../../bootstrap/Input";

class ItemFooter extends React.PureComponent {
    refreshRateHandler(refreshRate) {
        const {id} = this.props.item;

        this.props.setRefreshRate(new RefreshRateRecord({id, refreshRate}));
    }

    heightChangeHandler(heightString) {
        const {id, width} = this.props.item;
        const height = number(heightString);

        this.props.resize(new ResizeRecord({id, height, width}));
    }

    widthChangeHandler(widthString) {
        const {id, height} = this.props.item;
        const width = number(widthString);

        this.props.resize(new ResizeRecord({id, height, width}));
    }

    render() {
        const {id, width, height, refreshRate} = this.props.item;

        const heightId = `item-${id}-footer-height`;
        const widthId = `item-${id}-footer-width`;
        const refreshRateId = `item-${id}-footer-refreshRate`;

        return (
            <div className="panel-footer">
                <InlineForm>

                    <FormItem id={heightId} title="Height:">
                        <Input type="text"
                               id={heightId}
                               value={height.toString()}
                               onChange={this.heightChangeHandler.bind(this)}/>
                    </FormItem>

                    <FormItem id={widthId} title="Width:">
                        <Input type="text"
                               id={widthId}
                               value={width.toString()}
                               onChange={this.widthChangeHandler.bind(this)}/>
                    </FormItem>

                    <FormItem id={refreshRateId} title="Refresh rate:">
                        <Input type="text"
                               id={refreshRateId}
                               value={refreshRate.toString()}
                               onChange={this.refreshRateHandler.bind(this)}/>
                    </FormItem>

                </InlineForm>
            </div>
        );
    }
}

ItemFooter.propTypes = {
    item: PropTypes.instanceOf(ItemRecord).isRequired,
    resize: PropTypes.func.isRequired,
    setRefreshRate: PropTypes.func.isRequired,
};

export default ItemFooter;
