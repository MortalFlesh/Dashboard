import dispatcher from './../lib/dispatcher';

export function setAddTemplateName(name:string) {
    dispatcher.dispatch(setAddTemplateName, name);
}

export function addTemplate() {
    dispatcher.dispatch(addTemplate);
}
