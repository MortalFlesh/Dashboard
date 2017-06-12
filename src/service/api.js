// @flow
import {List} from "immutable";
import {Observable} from "rxjs";
import Loader from './loader';
import Config from './config';
import TemplateRecord from "../component/Template/record";
import ItemRecord from "../component/Item/record";

export default class Api {
    loader: Loader;
    url: string;

    constructor(loader: Loader, config: Config) {
        this.loader = loader;
        this.url = config.getApiUrl();
    }

    loadTemplates$(): Observable {
        return this.getData$('/template/list/')
            .map(({templates}) => /* todo new */List(templates.map((template) => new TemplateRecord(template))));
    }

    /** @private */
    getData$(path: string): Observable {
        return this.loader.get$(this.url + path)
            .map(({response}) => response);
    }

    loadItems$(templateId: number): Observable {
        return this.getData$(`/template/${templateId}/item/list/`)
            .map(({items}) => /* todo new */List(items.map((item) => new ItemRecord(item))));
    }

    saveItem$(templateId: number, item: ItemRecord): Observable {
        return this.postData$(`/template/${templateId}/item/`, {item: item.toJSON()})
            .map(({id}) => id);
    }

    /** @private */
    postData$(path: string, data: any): Observable {
        return this.loader.post$(this.url + path, JSON.stringify(data))
            .map(({response}) => response);
    }

    saveTemplate$(template: TemplateRecord): Observable {
        const {name} = template;

        return this.postData$('/template/', {name})
            .map(({id}) => id);
    }
}
