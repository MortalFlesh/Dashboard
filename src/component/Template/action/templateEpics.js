import {Observable} from "rxjs";
import {getService, TYPES} from "./../../../service";
import {SELECT_TEMPLATE} from "./../../Dashboard/constant";
import {setItems} from "./../action";

export const loadItemsEpic = (action$, {getState}) =>
    action$.ofType(SELECT_TEMPLATE)
        .switchMap(({selectedTemplateId}) =>
            Observable.from(getService(TYPES.Api).loadItems$(selectedTemplateId || getState().dashboard.selectedTemplateId))
                .map(setItems)
        );
