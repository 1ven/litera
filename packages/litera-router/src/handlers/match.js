import { notFound, match } from "../internal";

export default (template, route) => data => req => {
  const matched = match(template, data.path);

  if (matched) {
    return route({
      path: matched.path,
      params: Object.assign({}, data.params, matched.params)
    })(req);
  }

  throw notFound;
};
