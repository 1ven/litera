import merge from "deepmerge";

export default (...items) => merge.all(items);
