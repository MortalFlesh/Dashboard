// @flow
import type {Action} from "./../../../flow/types";

import {ITEM_SAVED, SAVE, SET_HEIGHT, SET_NAME, SET_REFRESH_RATE, SET_URL, SET_WIDTH} from "./../constant";
import ItemRecord from './../../Item/record';

export function setName(name: string): Action {
    return {
        type: SET_NAME,
        name,
    }
}

export function setUrl(url: string): Action {
    return {
        type: SET_URL,
        url,
    }
}

export function setRefreshRate(refreshRate: number): Action {
    return {
        type: SET_REFRESH_RATE,
        refreshRate,
    }
}

export function setHeight(height: number): Action {
    return {
        type: SET_HEIGHT,
        height,
    }
}

export function setWidth(width: number): Action {
    return {
        type: SET_WIDTH,
        width,
    }
}

export function save(item: ItemRecord): Action {
    return {
        type: SAVE,
        item,
    }
}

export function itemSaved(item: ItemRecord): Action {
    return {
        type: ITEM_SAVED,
        item,
    }
}
