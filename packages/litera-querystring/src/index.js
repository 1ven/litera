import url from "url";
import queryString from "querystring";

export const readQuery = req => {
  const { query } = url.parse(req.url);
  return queryString.parse(query);
};
