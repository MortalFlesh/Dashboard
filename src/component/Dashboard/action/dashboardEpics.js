import {SELECT_TEMPLATE} from "./../constant";

export const changeTemplateEpic = (action$) =>
    action$.ofType(SELECT_TEMPLATE)
        // todo
        .map(SELECT_TEMPLATE);


function __changeTemplate(templateId) {
    const id = parseInt(templateId, 10);

    actions.setSelectedTemplate(id);

    api.loadTemplateName(id).then(actions.setTemplateName);
    api.loadItems(id).then(actions.setItems);

    actions.showAddTemplate(false);
}
