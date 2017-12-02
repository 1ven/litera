import merge from "deepmerge";
import isPlainObject from "is-plain-object";

export default (...items) => merge.all(items.filter(isPlainObject));
