import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actions from './actions';
import Form from './../bootstrap/form';
import FormItem from './../bootstrap/formItem';
import Input from './../bootstrap/input';
import PrimaryButton from './../bootstrap/primaryButton';
import TemplateRecord from './../template/templateRecord';

const AddTemplateForm = React.createClass({
    mixins: [PureRenderMixin],

    propTypes: {
        template: React.PropTypes.instanceOf(TemplateRecord).isRequired,
        isSuccess: React.PropTypes.bool.isRequired,
    },

    nameChangeHandler(name) {
        actions.setAddTemplateName(name);
    },

    saveHandler() {
        actions.addTemplate();
    },

    render() {
        const template = this.props.template;

        return (
            <div className="AddTemplateForm">
                <h2>Add new template</h2>

                <Form>

                    <FormItem id="add-template-name" title="Name:" sizeLabel={1} size={10}>
                        <Input type="text"
                               placeholder="Template name"
                               id="add-template-name"
                               value={template.name}
                               onChange={this.nameChangeHandler}/>
                    </FormItem>

                    <FormItem id="" title="" sizeLabel={1} size={10}>
                        <PrimaryButton big={true}
                                       success={this.props.isSuccess}
                                       onClick={this.saveHandler}>
                            Save template
                        </PrimaryButton>
                    </FormItem>

                </Form>
            </div>
        );
    }
});

export default AddTemplateForm;
