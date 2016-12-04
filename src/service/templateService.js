import api from "./../service/api";
import * as actions from "./../dashboardApp/actions";

class TemplateService {
    changeTemplate(templateId) {
        const id = parseInt(templateId, 10);

        actions.setSelectedTemplate(id);

        api.loadTemplateName(id).then(actions.setTemplateName);
        api.loadItems(id).then(actions.setItems);

        actions.showAddTemplate(false);
    }
}

export default new TemplateService();
