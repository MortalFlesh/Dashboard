import React from 'react';
import {addons} from 'react/addons';
import TemplateRecord from './../template/templateRecord';

const Template = React.createClass({
    mixins: [addons.PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        const template = this.props.template;

        return (
            <div className="Template">
                ... template - {template.name} ...
            </div>
        );
    }
});

export default Template;
