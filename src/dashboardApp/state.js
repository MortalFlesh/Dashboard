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
        templates: [
            defaultTemplate.toJS(),
        ],
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
            name: 'Graph 1',
            url: 'http://www.ebrueggeman.com/sites/www.ebrueggeman.com/files/images/example_graph_1.png',
            position: 'todo',
            height: 350,
            width: 500,
            refreshRate: 2000,
        },
        {
            id: 2,
            name: 'Graph 2',
            url: 'http://www.mathgoodies.com/lessons/graphs/images/line_example1.jpg',
            position: 'todo',
            height: 450,
            width: 450,
            refreshRate: 2000,
        },
    ],
    templates: [
        {
            id: 1,
            name: 'Monitoring',
            items: [],
        },
    ],
};

export function loadServerData() {
    const source = Immutable.fromJS(serverData).toJS();

    basicData.get('dashboard')
        .map((v, k) => k)
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
            } else {
                console.log(`ERROR: Source does not contains ${paramKey} property!`);
            }
        });
}

function upperFirst(param) {
    const first = param.charAt(0).toUpperCase();
    const rest = param.substr(1);

    return `${first}${rest}`;
}
