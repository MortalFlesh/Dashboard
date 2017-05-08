import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import TemplateRecord from "./../template/templateRecord";

import DropdownMenu from "./bootstrap/dropdown/DropdownMenu";
import DropdownLink from "./bootstrap/dropdown/DropdownLink";
import DropdownItem from "./bootstrap/dropdown/DropdownItem";
import PrimaryButton from "./bootstrap/PrimaryButton";

class DashboardMenu extends React.PureComponent {
    render() {
        const selectedTemplate = this.props.template;

        // const template = t.toJS(); // todo - check why was that?
        const templates = this.props.templates.map((template) =>
            <DropdownItem key={template.id}
                          id={template.id}
                          title={template.name}
                          selected={template.id === selectedTemplate.id}
                          onClick={() => {
                              this.props.selectTemplate(template);
                          }}/>
        );

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button"
                                className="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#navbar"
                                aria-expanded="false"
                                aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                        </button>

                        <a className="navbar-brand"
                           href="https://github.com/MortalFlesh/Dashboard"
                           target="_blank">
                            |MF|
                        </a>
                        <span className="navbar-brand">{this.props.template.name}</span>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <DropdownLink title="Select template"/>
                                <DropdownMenu items={templates}/>
                            </li>

                            <li>
                                <p className="navbar-btn">
                                    <PrimaryButton onClick={() => {
                                        this.props.showAddTemplate(true)
                                    }}>
                                        + Template
                                    </PrimaryButton>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

DashboardMenu.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    templates: PropTypes.instanceOf(List).isRequired,
    showAddTemplate: PropTypes.func.isRequired,
    selectTemplate: PropTypes.func.isRequired,
};

export default DashboardMenu;
