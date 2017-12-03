import { notFound } from "../internal";

export default (method, route) => (req, data) => {
  if (method === req.method) {
    return route(req, data);
  }
  throw notFound;
};
