import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';
import Header from './../bootstrap/header';
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
                <Header>{template.name}</Header>

                <Items items={template.items}/>
            </div>
        );
    }
});

export default Template;
