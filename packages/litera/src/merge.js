import merge from "deepmerge";
import isPlainObject from "is-plain-object";

export default (...items) => merge.all(items.filter(isPlainObject));

export const withStatus = status => ({ status });
export const withBody = body => ({ body });
export const withHeader = (k, v) => ({ headers: { [k]: v } });
