const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", //开发环境
  devtool: "inline-source-map", //映射源码位置
  entry: {
    app: "./src/index.js",
    //防止重复
    // app: { import: "./src/index.js", dependOn: "shared" },
    // print: { import: "./src/print.js", dependOn: "shared" },
    // shared: "lodash",
  },
  plugins: [
    // 对于 CleanWebpackPlugin 的 v2 versions 以下版本，使用 new CleanWebpackPlugin(['dist/*'])
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), //不在 watch 触发增量构建后删除 index.html 文件
    // new HtmlWebpackPlugin({
    //   // title: "管理输出",
    //   title: "Caching",
    // }),
  ],
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    // filename: "[name].[contenthash].js", //以防止代码更新，
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/", //webpack-dev-middleware设置，yarn server//本示例只是运行3000端口一下
    pathinfo: false, //会在输出的 bundle 中生成路径信息,在打包数千个模块的项目中，这会导致造成垃圾回收性能压力
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, //字体文件
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
    ],
  },
  optimization: {
    // moduleIds: "hashed", //在通过filename: "[name].[contenthash].js",构建时不变的代码出口保持hash一致
    runtimeChunk: "single", //分离runtime代码
    //防止重复
    splitChunks: {
      cacheGroups: {
        //分离第三方类库
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
    //这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  //dev-server
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 7000,
    // host:'0.0.0.0'//主机号
    historyApiFallback: {
      //无效地址
      rewrites: [{ from: /./, to: "/404.html" }],
    },
    watchOptions: {
      //监听文件改动
      aggregateTimeout: 800,
      poll: 1000,
      ignored: /node_modules/,
    },
    hot: true, //热刷新
  },
};
