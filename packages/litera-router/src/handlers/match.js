import { notFound, match } from "../internal";

export default (template, route) => (req, data) => {
  const matched = match(template, data.path);

  if (matched) {
    return route(req, {
      ...data,
      params: {
        ...data.params,
        ...matched.params
      },
      path: matched.path
    });
  }

  throw notFound;
};
