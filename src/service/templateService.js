import api from "./../service/api";
import * as actions from "./../dashboardApp/actions";

class TemplateService {
    changeTemplate(templateId) {
        const id = parseInt(templateId, 10);

        actions.setSelectedTemplate(id);

        api.loadTemplateName(id, (response) => {
            actions.setTemplateName(response.name)
        });

        api.loadItems(id, (response) => {
            actions.setItems(response.items);
        });
    }
}

export default new TemplateService();
