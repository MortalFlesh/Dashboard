class Api {
    saveItem(templateId, item) {
        // todo saves an item to api POST:template/{id}/item/
        console.log(`API<POST>: /template/${templateId}/item/`, item);
    }

    saveTemplate(template) {
        // todo saves a template to api POST:template/
        console.log('API<POST>: /template/', template);
    }
}

export default new Api();
