import {Observable} from "rxjs";
import {getService, TYPES} from "./../../../service";
import {inArray} from "./../../../service/utils";
import {SELECT_TEMPLATE} from "./../../Dashboard/constant";
import {SET_POSITION} from "./../constant";
import {setItems, showSave} from "./../action";

export const loadItemsEpic = (action$, {getState}) =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({selectedTemplateId}) =>
            Observable.from(getService(TYPES.Api).loadItems$(selectedTemplateId || getState().dashboard.selectedTemplateId))
                .map(setItems)
        );

export const showSaveEpic = (action$) =>
    action$.filter(({type}) => inArray(type, [SET_POSITION]))
        .debounceTime(200)
        .map(({payload}) =>
            showSave(payload.id)
        );
