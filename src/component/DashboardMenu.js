import React from "react";
import PropTypes from "prop-types";
import {List} from "immutable";
import TemplateRecord from "./../template/templateRecord";

import DropdownMenu from "../bootstrap/dropdownMenu";
import DropdownLink from "./../bootstrap/dropdownLink";
import DropdownItem from "./../bootstrap/dropdownItem";
import PrimaryButton from "./../bootstrap/primaryButton";

class DashboardMenu extends React.PureComponent {
    render() {
        const selectedTemplate = this.props.template;

        const templates = this.props.templates.map((template) => {
            // const template = t.toJS(); // todo - check why was that?
            const selected = template.id === selectedTemplate.id;

            return <DropdownItem key={template.id}
                                 id={template.id}
                                 title={template.name}
                                 selected={selected}
                                 onClick={() => {
                                     this.props.selectTemplate(template);
                                 }}/>;
        });

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
                                    <PrimaryButton onClick={() => {this.props.showAddTemplate(true)}}>
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
