import Immutable from 'immutable';
import State from './../lib/state';
import * as actions from './actions';
import TemplateRecord from './../template/templateRecord';
import ItemRecord from './../item/itemRecord';

const defaultTemplate = new TemplateRecord();
const defaultItem = new ItemRecord();

const basicData = Immutable.fromJS({
    dashboard: {
        selectedTemplate: defaultTemplate.id,
        templateName: defaultTemplate.name,

        items: defaultTemplate.items,
        showAddItem: false,

        addItemName: defaultItem.name,
        addItemUrl: defaultItem.url,
        addItemRefreshRate: defaultItem.refreshRate,
        addItemHeight: defaultItem.height,
        addItemWidth: defaultItem.width,

        addItemSuccess: false,
        templates: [
            defaultTemplate.toJS(),
        ],
        showAddTemplate: false,
        addTemplateSuccess: false,

        addTemplateName: defaultTemplate.name,
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
            top: 0,
            left: 0,
            height: 350,
            width: 500,
            refreshRate: 2000,
            isMoving: false,
        },
        {
            id: 2,
            name: 'Graph 2',
            url: 'http://www.mathgoodies.com/lessons/graphs/images/line_example1.jpg',
            top: 30,
            left: 530,
            height: 450,
            width: 450,
            refreshRate: 2000,
            isMoving: false,
        },
    ],
    templates: [
        {
            id: 1,
            name: 'Monitoring',
            items: [],
        },
        {
            id: 2,
            name: 'Logy',
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
                console.log(`WARNING: Source does not contains ${paramKey} property!`);
            }
        });
}

function upperFirst(param) {
    const first = param.charAt(0).toUpperCase();
    const rest = param.substr(1);

    return `${first}${rest}`;
}
