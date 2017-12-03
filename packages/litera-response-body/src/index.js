import { contentType } from "mime-types";

export const withJson = body => {
  const raw = JSON.stringify(body);
  return {
    headers: {
      "content-type": contentType("json"),
      "content-length": Buffer.byteLength(raw, "utf8")
    },
    body: raw
  };
};
