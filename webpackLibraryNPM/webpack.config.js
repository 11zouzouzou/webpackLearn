const path = require("path");

module.exports = (env) => {
  console.log("node_env", env.NODE_ENV);
  console.log("product", env.production);

  return {
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
};
