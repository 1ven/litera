export default () => atom => async req => {
  try {
    return await atom(req);
  } catch (err) {
    return {
      status: 500,
      body:
        process.env.NODE_ENV === "production"
          ? ""
          : err.stack || err.message || JSON.stringify(err)
    };
  }
};
