import "rxjs";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import DashboardApp from './component/Dashboard';
import {configureStore} from "./component/Dashboard/store";

const store = configureStore();

render(
    <Provider store={store}>
        <DashboardApp/>
    </Provider>,
    document.getElementById('dashboard')
);
