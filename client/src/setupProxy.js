const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        // "/api",
        createProxyMiddleware("/api", {
            target: "http://localhost:3005",
            changeOrigin: true,
        })
    );
};