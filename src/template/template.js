import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';

const Template = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        const template = this.props.template;

        return (
            <div className="container-fluid theme-showcase" role="main">
                ... template - {template.name} ...
            </div>
        );
    }
});

export default Template;
