import { notFound, noTrailingSlash, noQueryString } from "./internal";

export default atom => async (req, data) => {
  try {
    return atom(req, {
      ...data,
      path: noTrailingSlash(noQueryString(req.url))
    });
  } catch (err) {
    if (err === notFound) {
      return {
        status: 404,
        headers: {
          "content-type": "text/plain; charset=utf-8"
        },
        body: `Cannot ${req.method} ${req.url}`
      };
    }

    throw err;
  }
};
