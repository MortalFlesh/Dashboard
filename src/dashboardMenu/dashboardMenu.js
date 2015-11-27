import {List} from 'immutable';
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import TemplateRecord from './../template/templateRecord';
import DropdownMenu from './../bootstrap/dropdownMenu';
import DropdownLink from './../bootstrap/dropdownLink';
import DropdownItem from './../bootstrap/dropdownItem';
import PrimaryButton from './../bootstrap/primaryButton';

const DashboardMenu = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        templates: React.PropTypes.instanceOf(List).isRequired,
        addTemplateHandler: React.PropTypes.func.isRequired,
    },

    render() {
        const template = this.props.template;

        const templates = this.props.templates.map((t) => {
            const selected = t.id === template.id;

            return <DropdownItem key={t.id} id={t.id} title={t.name} selected={selected}/>;
        }).toList();

        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <a className="navbar-brand" href="#">MF Dashboard</a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <DropdownLink title={`Template - ${template.name}`}/>
                                <DropdownMenu items={templates}/>
                            </li>

                            <li>
                                <p className="navbar-btn">
                                    <PrimaryButton onClick={this.props.addTemplateHandler}>+ Template</PrimaryButton>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

export default DashboardMenu;
