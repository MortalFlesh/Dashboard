import {SAVE} from "../constant";
import {templateSaved} from "../action";
import {addFlashMessage} from "../../FlashMessages/action";
import FlashMessageRecord from "../../FlashMessage/record";

export const saveTemplateEpic = (action$, store, {api}) =>
    action$.ofType(SAVE)
        .switchMap(({template}) => api
            .saveTemplate$(template)
            .flatMap((id) => [
                templateSaved(template.set('id', id)),
                addFlashMessage(new FlashMessageRecord({message: 'New template successfully saved!'})),
            ])
        );
