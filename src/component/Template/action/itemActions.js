// @flow
import type {Action} from "./../../../flow/types";
import type {ItemAction, PayloadAction} from "./../types";

import {RESIZE, SAVE, SET_MOVING, SET_POSITION, SET_REFRESH_RATE, SHOW_SAVE} from "./../constant";
import ItemRecord from "./../../Item/record";
import MovingRecord from "./../../Item/record/movingRecord";
import PositionRecord from "./../../Item/record/positionRecord";
import RefreshRateRecord from "./../../Item/record/refreshRateRecord";
import ResizeRecord from "./../../Item/record/resizeRecord";

export function setMoving(moving: MovingRecord): PayloadAction {
    return {
        type: SET_MOVING,
        payload: moving,
    }
}

export function setPosition(position: PositionRecord): PayloadAction {
    return {
        type: SET_POSITION,
        payload: position,
    }
}

export function resize(resize: ResizeRecord): PayloadAction {
    return {
        type: RESIZE,
        payload: resize,
    }
}

export function setRefreshRate(refreshRate: RefreshRateRecord): PayloadAction {
    return {
        type: SET_REFRESH_RATE,
        payload: refreshRate,
    }
}

export function showSave(id: number): Action {
    return {
        type: SHOW_SAVE,
        id,
    }
}

export function save(item: ItemRecord): ItemAction {
    return {
        type: SAVE,
        item,
    }
}
