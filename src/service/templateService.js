import api from "./../service/api";
import * as actions from "./../dashboardApp/actions";

class TemplateService {
    changeTemplate(templateId) {
        const id = parseInt(templateId, 10);

        actions.setSelectedTemplate(id);

        api.loadTemplateName(id).then(actions.setTemplateName);

        api.loadItems(id, (response) => {
            actions.setItems(response.items);
        });

        actions.showAddTemplate(false);
    }
}

export default new TemplateService();
