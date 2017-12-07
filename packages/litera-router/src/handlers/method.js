import { curry } from "ramda";
import { notFound } from "../internal";

export default curry((method, atom) => (req, data) => {
  if (method === req.method) {
    return atom(req, data);
  }
  throw notFound;
});
