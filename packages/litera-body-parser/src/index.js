import contentType from "content-type";
import { json } from "./types";

export default () => atom => req => {
  const ct = req.headers["content-type"];

  if (!ct) {
    return atom(req);
  }

  const { type } = contentType.parse(ct);

  switch (type) {
    case "application/json":
      return atom(json(req));
    default:
      return atom(req);
  }
};
