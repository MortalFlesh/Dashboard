import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

const ItemButtons = React.createClass({
    mixins: [PureRenderMixin],

    render() {
        return (
            <div className="btn-group btn-group-xs" style={{float: 'right'}}>
                <button className="btn btn-primary">Save</button>
                <button className="btn btn-danger">Cancel</button>
            </div>
        );
    }
});

export default ItemButtons;
