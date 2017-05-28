import {applyMiddleware, createStore} from "redux";
import {createEpicMiddleware} from "redux-observable";
import {getService, TYPES} from "./../../service";
import {rootEpic} from "./action";
import rootReducer from "./reducer";

export function configureStore(initialState) {
    const epicMiddleware = createEpicMiddleware(rootEpic, {
        dependencies: {
            api: getService(TYPES.Api),
            sessionStorage: getService(TYPES.SessionStorage),
        }
    });
    const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

    return createStoreWithMiddleware(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}
