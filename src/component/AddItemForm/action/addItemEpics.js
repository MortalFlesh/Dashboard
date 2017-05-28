import {SAVE} from "./../constant";
import {itemSaved} from "./addItemActions";
import {addFlashMessage} from "./../../FlashMessages/action";
import FlashMessageRecord from "./../../FlashMessage/record";

export const saveEpic = (action$, {getState}, {api}) =>
    action$.ofType(SAVE)
        .switchMap(({item}) => api
            .saveItem$(getState().template.id, item)
            .flatMap((id) => [
                itemSaved(item.set('id', id)),
                addFlashMessage(new FlashMessageRecord({message: 'New item successfully saved!'}))
            ])
        );
