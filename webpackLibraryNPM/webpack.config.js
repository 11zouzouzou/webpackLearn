const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "webpack-numbers.js",
    libraryTarget: "umd",
    // globalObject: "this",//暴露 library
    // libraryExport: 'default',
    library: "webpackNumbers",
  },
  externals: {
    lodash: {
      commonjs: "lodash", //忽略包
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};
