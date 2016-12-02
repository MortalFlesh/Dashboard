import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import TemplateRecord from "./../template/templateRecord";
import Items from "./../items/items";

const Template = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        const template = this.props.template;

        return (
            <Items items={template.items}/>
        );
    }
});

export default Template;
