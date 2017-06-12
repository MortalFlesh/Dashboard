// @flow
import {container} from "./container";
import SERVICES from "./services";

export {SERVICES};

export function getService<T>(service: Symbol): T {
    return container.get(service);
}
