import { notFound } from "../internal";

export default (...routes) => (req, data) => {
  for (let route of routes) {
    try {
      return route(req, data);
    } catch (err) {
      if (err !== notFound) {
        throw err;
      }
    }
  }

  throw notFound;
};
