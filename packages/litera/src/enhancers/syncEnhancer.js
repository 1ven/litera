import isPlainObject from "is-plain-object";

export default (result, cb) => {
  if (isPlainObject(result)) {
    cb(result);
  }
};
