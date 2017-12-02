import cookie from "cookie";

export const readCookie = req => cookie.parse(req.headers["cookie"]);

export const withCookie = (key, value, options) => ({
  headers: {
    "Set-Cookie": cookie.serialize(key, value, options)
  }
});
