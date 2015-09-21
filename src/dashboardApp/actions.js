import dispatcher from './../lib/dispatcher';

export function setSelectedTemplate(template: object) {
    dispatcher.dispatch(setSelectedTemplate, template);
}

export function setTemplateName(name: string) {
    dispatcher.dispatch(setTemplateName, name);
}

export function setItems(items: array) {
    dispatcher.dispatch(setItems, items);
}

export function setTemplates(templates: array) {
    dispatcher.dispatch(setTemplates, templates);
}

