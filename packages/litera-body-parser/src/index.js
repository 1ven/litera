import contentType from "content-type";
import { json } from "./types";

export default () => atom => req => {
  const { type } = contentType.parse(req.headers["content-type"]);

  switch (type) {
    case "application/json":
      return atom(json(req));
    default:
      return atom(req);
  }
};
