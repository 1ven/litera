import { notFound } from "../internal";

export default (...routes) => data => req => {
  for (let route of routes) {
    try {
      return route(data)(req);
    } catch (err) {
      if (err !== notFound) {
        throw err;
      }
    }
  }

  throw notFound;
};
