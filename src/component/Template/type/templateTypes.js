// @flow
import {List} from "immutable";
import ItemRecord from "../../Item/record";
import MovingRecord from "../../Item/record/movingRecord";
import PositionRecord from "../../Item/record/positionRecord";
import RefreshRateRecord from "../../Item/record/refreshRateRecord";
import ResizeRecord from "../../Item/record/resizeRecord";

export type ItemList = List<ItemRecord>;
export type ItemAction = { type: string, item: ItemRecord };

export type PayloadAction = {
    type: string,
    payload: Payload,
    [id: string]: any,
};

export type Payload =
    | { id: number }
    | { id: number, isShowSaveButton: boolean }
    | ItemRecord
    | MovingRecord
    | PositionRecord
    | RefreshRateRecord
    | ResizeRecord;
