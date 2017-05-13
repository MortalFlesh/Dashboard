import React from "react";
import PropTypes from "prop-types";
import TemplateRecord from "./record";

import Items from "./../Items";

class Template extends React.PureComponent {
    render() {
        const {template, setMoving, setPosition, resize, save} = this.props;

        const items = {
            items: template.items,
            setMoving,
            setPosition,
            resize,
            save,
        };

        return (
            <Items {...items}/>
        );
    }
}

Template.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    setMoving: PropTypes.func.isRequired,
    setPosition: PropTypes.func.isRequired,
    resize: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
};

export default Template;
