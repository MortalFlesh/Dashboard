// @flow
import {container} from "./container";
import TYPES from "./types";

export {TYPES};

export function getService<T>(service: Symbol): T {
    return container.get(service);
}
