import { notFound } from "../internal";

export default (method, route) => data => req => {
  if (method === req.method) {
    return route(data)(req);
  }
  throw notFound;
};
