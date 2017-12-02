export const withRedirect = (url, status = 302) => ({
  status,
  headers: {
    Location: url
  }
});
