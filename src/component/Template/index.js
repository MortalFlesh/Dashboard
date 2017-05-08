import React from "react";
import PropTypes from "prop-types";
import TemplateRecord from "./record";

import ItemsApp from "./../Items";

class Template extends React.PureComponent {
    render() {
        const {template} = this.props;

        return (
            <ItemsApp/>
        );
    }
}

Template.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
};

export default Template;
