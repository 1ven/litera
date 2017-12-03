import { notFound } from "../internal";

export default (method, atom) => (req, data) => {
  if (method === req.method) {
    return atom(req, data);
  }
  throw notFound;
};
