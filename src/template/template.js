import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';
import Items from './../items/items';

const Template = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        const template = this.props.template;

        return (
            <div className="container-fluid theme-showcase" role="main">
                <h1>{template.name}</h1>

                <Items items={template.items}/>
            </div>
        );
    }
});

export default Template;
