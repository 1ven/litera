export default (result, cb) => {
  if (result instanceof Promise) {
    result.then(res => cb(res)).catch(err => {
      setTimeout(() => {
        throw err;
      });
    });
  }
};
