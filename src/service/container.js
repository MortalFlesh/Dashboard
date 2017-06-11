// @flow
import {Container} from "inversify";
import {helpers} from "inversify-vanillajs-helpers";
import TYPES from "./types";
import ConfigFactory from "./configFactory";
import Loader from "./loader";
import Api from "./api";
import SessionStorageService from "./sessionStorageService";

const PRIVATE = {
    ConfigFactory: Symbol('ConfigFactory'),
    SessionStorage: Symbol('SessionStorage'),
};

type Global = {sessionStorage: Object};

let container: Container = {};

export function createContainer({sessionStorage}: Global): void {
    container = new Container();

    const register = helpers.register(container);
    const registerConstantValue = helpers.registerConstantValue(container);
    const registerFactory = helpers.registerFactory(container);
    const singletonScope = (bind) => bind.inSingletonScope();

    registerConstantValue(PRIVATE.SessionStorage, sessionStorage);

    register(PRIVATE.ConfigFactory, [], singletonScope)(ConfigFactory);
    register(TYPES.Loader, [], singletonScope)(Loader);
    register(TYPES.Api, [TYPES.Loader, TYPES.Config], singletonScope)(Api);
    register(TYPES.SessionStorage, [PRIVATE.SessionStorage, TYPES.Config], singletonScope)(SessionStorageService);

    registerFactory(TYPES.Config, (context) =>
        context.container.get(PRIVATE.ConfigFactory).createConfig()
    );
}

export {container};
