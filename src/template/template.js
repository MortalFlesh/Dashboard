import React from "react";
import PropTypes from "prop-types";
import TemplateRecord from "./../template/templateRecord";
import Items from "./../items/items";

class Template extends React.PureComponent {
    render() {
        const {template} = this.props;

        return (
            <Items items={template.items}/>
        );
    }
}

Template.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
};

export default Template;
