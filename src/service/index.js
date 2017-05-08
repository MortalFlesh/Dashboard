import jQuery from "jquery-browserify";
import Config from "./config";
import Loader from "./loader";
import Api from "./api";
import SessionStorageService from "./sessionStorageService";

let container = {};

export function createContainer({sessionStorage}) {
    const configuration = {
        apiUrl: 'http://dashboard-api',
        apiVersion: 'dev',
    };
    const configurationLocal = {
        apiUrl: 'http://dashboard-api/app_dev.php',
    };

    const loader = new Loader(jQuery);
    const config = new Config(configuration, configurationLocal);

    return container = {
        config,
        loader,
        api: new Api(loader, config),
        sessionStorage: new SessionStorageService(sessionStorage),
    };
}

export function getService(service) {
    if (!container.hasOwnProperty(service)) {
        throw `Service ${service} is not in container!`;
    }

    return container[service];
}
