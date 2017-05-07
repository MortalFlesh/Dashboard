import "rxjs";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import DashboardApp from './component/Dashboard';
import {configureStore} from "./component/Dashboard/store";
import DashboardState from "./component/Dashboard/state";

const initialState = new DashboardState();  // todo - predat do configureStore() a zjistit, jestli jsou treba dalsi initialStaty v jednotlivych reducerech
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <DashboardApp/>
    </Provider>,
    document.getElementById('dashboard')
);
