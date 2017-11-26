import UrlPattern from "url-pattern";
import omit from "lodash.omit";
import { noTrailingSlash } from "./";

export default (template, path) => {
  const cutTemplate = noTrailingSlash(template);

  if (cutTemplate === "" && path === "") {
    return {
      path: void 0
    };
  }

  if (typeof path === "undefined" || cutTemplate === "") {
    return null;
  }

  const result = new UrlPattern(cutTemplate).match(path);

  return (
    result && {
      path: result._,
      params: omit(result, ["_"])
    }
  );
};
