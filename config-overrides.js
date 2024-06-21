const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "fs": false,
    "stream": require.resolve("stream-browserify"),
    "zlib": require.resolve("browserify-zlib"),
    "http": require.resolve("stream-http"),
    "net": false,
    "querystring": require.resolve("querystring-es3"),
    "url": require.resolve("url/"),
    "buffer": require.resolve("buffer/"),
    "util": require.resolve("util/"),
    "process": require.resolve("process/browser"),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]);

  return config;
};
