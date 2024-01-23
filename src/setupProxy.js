const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/auth",
    createProxyMiddleware({
      target: "http://102.36.176.226:8081",
      changeOrigin: true,
    })
  );
};
