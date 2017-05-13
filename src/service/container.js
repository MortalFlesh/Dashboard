import {Container} from "inversify";
import {helpers} from "inversify-vanillajs-helpers";
import jQuery from "jquery-browserify";
import TYPES from "./types";
import ConfigFactory from "./configFactory";
import Loader from "./loader";
import Api from "./api";
import SessionStorageService from "./sessionStorageService";

const PRIVATE = {
    ConfigFactory: Symbol('ConfigFactory'),
    SessionStorage: Symbol('SessionStorage'),
};

let container = {};

export function createContainer({sessionStorage}) {
    container = new Container();

    const register = helpers.register(container);
    const registerConstantValue = helpers.registerConstantValue(container);
    const registerFactory = helpers.registerFactory(container);
    const singletonScope = (bind) => bind.inSingletonScope();

    registerConstantValue(TYPES.jQuery, jQuery);
    registerConstantValue(PRIVATE.SessionStorage, sessionStorage);

    register(PRIVATE.ConfigFactory, [], singletonScope)(ConfigFactory);
    register(TYPES.Loader, [TYPES.jQuery], singletonScope)(Loader);
    register(TYPES.Api, [TYPES.Loader, TYPES.Config], singletonScope)(Api);
    register(TYPES.SessionStorage, [PRIVATE.SessionStorage, TYPES.Config], singletonScope)(SessionStorageService);

    registerFactory(TYPES.Config, (context) =>
        context.container.get(PRIVATE.ConfigFactory).createConfig()
    );
}

export {container};
