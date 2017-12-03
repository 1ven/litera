import { notFound, match } from "../internal";

export default (template, atom) => (req, data) => {
  const matched = match(template, data.path);

  if (matched) {
    return atom(req, {
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
