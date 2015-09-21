import Immutable from 'immutable';
import State from './../lib/state';
import * as actions from './actions';
import TemplateRecord from './../template/templateRecord';

const defaultTemplate = new TemplateRecord();

const basicData = Immutable.fromJS({
    dashboard: {
        selectedTemplate: defaultTemplate.id,
        templateName: defaultTemplate.name,
        items: defaultTemplate.items,
    }
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const dashboardCursor = appState.cursor(['dashboard']);

const serverData = {    // todo will be loaded from server
    selectedTemplate: 1,
    templateName: 'Monitoring',
    items: [
        {
            id: 1,
            name: 'Page 1',
            url: 'http://someurl/item1',
            position: 'todo',
            height: 200,
            width: 400,
        },
        {
            id: 2,
            name: 'Page 2',
            url: 'http://someurl/item2',
            position: 'todo',
            height: 400,
            width: 400,
        },
    ],
};

export function loadServerData() {
    const source = Immutable.fromJS(serverData).toJS();

    basicData.dashboard
        .map((k, v) => k)
        .forEach((paramKey) => {
            if (source.hasOwnProperty(paramKey)) {
                const value = source[paramKey];
                const setterName = `set${upperFirst(paramKey)}`;

                if (actions.hasOwnProperty(setterName)) {
                    const setter = actions[setterName];
                    setter(value);
                } else {
                    console.log(`ERROR: Property ${paramKey} has no setter implemented!`);
                }
            }
        });
}

function upperFirst(param) {
    const first = param.charAt(0).toUpperCase();
    const rest = param.substr(1);

    return `${first}${rest}`;
}
