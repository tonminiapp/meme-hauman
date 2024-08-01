const path = require("path");

module.exports = {
  webpack: {
    resolve: {
      extensions: ["*", ".mjs", ".js", ".vue", ".json"],
      fallback: {
        crypto: false,
        http: false,
        https: false,
        zlib: false,
      },
      alias: {
        stream: "stream-browserify",
        zlib: "browserify-zlib",
      },
    },
    configure: (webpackConfig, _) => {
      webpackConfig.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      });
      webpackConfig.resolve.fallback = {
        crypto: false,
        http: false,
        https: false,
        zlib: false,
      };
      console.log(webpackConfig);
      return webpackConfig;
    },
  },
};
