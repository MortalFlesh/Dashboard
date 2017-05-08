import React from "react";
import PropTypes from "prop-types";

import TemplateRecord from "./../../template/templateRecord";
import Form from "./../../bootstrap/form";
import FormItem from "./../../bootstrap/formItem";
import Input from "./../../bootstrap/input";
import PrimaryButton from "./../../bootstrap/primaryButton";

class AddTemplateForm extends React.PureComponent {
    render() {
        const {template} = this.props;

        return (
            <div className="AddTemplateForm">
                <h2>Add new template</h2>

                <Form>

                    <FormItem id="add-template-name" title="Name:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Template name"
                               id="add-template-name"
                               value={template.name}
                               onChange={this.props.setName}/>
                    </FormItem>

                    <FormItem id="" title="" sizeLabel={1} size={10}>
                        <PrimaryButton big={true} onClick={this.props.addTemplate}>
                            Save template
                        </PrimaryButton>
                    </FormItem>

                </Form>
            </div>
        );
    }
}

AddTemplateForm.propTypes = {
    template: PropTypes.instanceOf(TemplateRecord).isRequired,
    addTemplate: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
};

export default AddTemplateForm;
