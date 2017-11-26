import isPlainObject from "is-plain-object";

export default res =>
  isPlainObject(res) &&
  typeof res.status === "number" &&
  (isPlainObject(res.headers) || typeof res.headers === "undefined") &&
  (typeof res.body === "string" || typeof res.body === "undefined");
