import {Record} from "immutable";
import ItemRecord from "./../Item/record";

export default new Record({
    item: new ItemRecord(),
});
