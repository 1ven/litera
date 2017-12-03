export default onError => atom => async (req, data) => {
  try {
    return await atom(req, data);
  } catch (err) {
    onError && onError(err);
    return {
      status: 500,
      body:
        process.env.NODE_ENV === "production"
          ? ""
          : err.stack || err.message || JSON.stringify(err)
    };
  }
};
