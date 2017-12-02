import contentType from "content-type";
import { json } from "./types";

export const readBody = req => {
  const ct = req.headers["content-type"];

  if (!ct) {
    return req.body;
  }

  const { type } = contentType.parse(ct);

  switch (type) {
    case "application/json":
      return json(req.body);
    default:
      return req.body;
  }
};
