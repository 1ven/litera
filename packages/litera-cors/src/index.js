export default atom => async req => {
  const res = await atom(req);

  return req.method === "OPTIONS"
    ? {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-type,Accept",
          "Access-Control-Allow-Methods": "GET,PUT,PATCH,POST,DELETE,OPTIONS",
          "Content-Length": "0"
        }
      }
    : {
        ...res,
        headers: {
          ...res.headers,
          "Access-Control-Allow-Origin": "*"
        }
      };
};
