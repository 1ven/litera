export default req => {
  return {
    ...req,
    body: parse(req.body)
  };
};

const parse = body => {
  if (typeof body === "undefined") {
    return void 0;
  }

  if (body.length === 0) {
    return {};
  }

  return JSON.parse(body);
};
