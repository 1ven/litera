import { notFound } from "../internal";

export default (...atoms) => (req, data) => {
  for (let atom of atoms) {
    try {
      return atom(req, data);
    } catch (err) {
      if (err !== notFound) {
        throw err;
      }
    }
  }

  throw notFound;
};
