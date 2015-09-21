import Immutable from 'immutable';
import State from './../lib/state';
import * as actions from './actions';

const basicData = Immutable.fromJS({
    dashboard: {
    }
});

const appState = new State(basicData);

export default appState;
export const state = appState;

export const dashboardCursor = appState.cursor(['dashboard']);
