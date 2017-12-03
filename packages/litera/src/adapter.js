import { isResponse } from "./utils";

export default (atom, initialData = {}) => (nodeReq, nodeRes) => {
  let temp = [];
  nodeReq
    .on("error", err => {
      throw err;
    })
    .on("data", chunk => {
      temp.push(chunk);
    })
    .on("end", () => {
      const { url, method, headers } = nodeReq;
      const body = Buffer.concat(temp).toString();

      atom({ url, method, headers, body }, initialData)
        .then(res => {
          if (typeof res === "undefined") {
            throw new Error("No response");
          }

          if (!isResponse(res)) {
            throw new Error("Unrecognized response");
          }

          nodeRes.writeHead(res.status, res.headers);
          nodeRes.end(res.body);
        })
        .catch(err => {
          setTimeout(() => {
            throw err;
          });
        });
    });
};
