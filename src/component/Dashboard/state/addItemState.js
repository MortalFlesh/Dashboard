import {Record} from "immutable";
import ItemRecord from "./../../../item/itemRecord";

export default new Record({
    item: new ItemRecord(),
});
