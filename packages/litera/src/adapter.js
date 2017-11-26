import { isResponse } from "./utils";
import { syncEnhancer, promiseEnhancer } from "./enhancers";

export default (atom, enhancers = []) => (nodeReq, nodeRes) => {
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
      const req = { url, method, headers, body };

      const result = atom(req);
      let sent = false;

      for (let enhancer of [...enhancers, promiseEnhancer, syncEnhancer]) {
        enhancer(result, res => {
          if (!sent) {
            sent = true;

            if (typeof res === "undefined") {
              throw new Error("No response");
            }

            if (!isResponse(res)) {
              throw new Error("Unrecognized response");
            }

            nodeRes.writeHead(res.status, res.headers);
            nodeRes.end(res.body);
          }
        });
      }
    });
};
