import React from 'react';
import {addons} from 'react/addons';
import TemplateRecord from './../template/templateRecord';

const DashboardMenu = React.createClass({
    mixins: [addons.PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
    },

    render() {
        const template = this.props.template;

        return (
            <div className="DashboardMenu">
                ... menu ...
                <span>selected template = {`id: ${template.id} | ${template.name}`}</span>
            </div>
        );
    }
});

export default DashboardMenu;
