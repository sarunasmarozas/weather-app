const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/v1/places',
    createProxyMiddleware({
      changeOrigin: true,
      target: 'https://api.meteo.lt',
      secure: true
    })
  );
};
