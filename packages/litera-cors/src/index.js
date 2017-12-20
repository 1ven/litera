export default (
  config = {
    allowedHeaders: ["Content-type", "Accept"]
  }
) => atom => async (req, data) => {
  if (req.method === "OPTIONS") {
    return {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": config.allowedHeaders.join(","),
        "Access-Control-Allow-Methods": "GET,PUT,PATCH,POST,DELETE,OPTIONS",
        "Content-Length": "0"
      }
    };
  }

  const res = await atom(req, data);

  return {
    ...res,
    headers: {
      ...res.headers,
      "Access-Control-Allow-Origin": "*"
    }
  };
};
