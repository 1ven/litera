import { notFound, noTrailingSlash, noQueryString } from "./internal";

export default route => req => {
  try {
    return route({
      path: noTrailingSlash(noQueryString(req.url))
    })(req);
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
