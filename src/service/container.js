// @flow
import {Container} from "inversify";
import {helpers} from "inversify-vanillajs-helpers";
import SERVICES from "./services";
import ConfigFactory from "./configFactory";
import Loader from "./loader";
import Api from "./api";
import SessionStorageService from "./sessionStorageService";

const PRIVATE_SERVICES = {
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

    registerConstantValue(PRIVATE_SERVICES.SessionStorage, sessionStorage);

    register(PRIVATE_SERVICES.ConfigFactory, [], singletonScope)(ConfigFactory);
    register(SERVICES.Loader, [], singletonScope)(Loader);
    register(SERVICES.Api, [SERVICES.Loader, SERVICES.Config], singletonScope)(Api);
    register(SERVICES.SessionStorage, [PRIVATE_SERVICES.SessionStorage, SERVICES.Config], singletonScope)(SessionStorageService);

    registerFactory(SERVICES.Config, (context) =>
        context.container.get(PRIVATE_SERVICES.ConfigFactory).createConfig()
    );
}

export {container};
