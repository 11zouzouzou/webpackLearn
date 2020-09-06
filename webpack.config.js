const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", //开发环境
  devtool: "inline-source-map", //映射源码位置
  entry: {
    app: { import: "./src/index.js", dependOn: "shared" },
    print: { import: "./src/print.js", dependOn: "shared" },
    shared: "lodash",
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }), //不在 watch 触发增量构建后删除 index.html 文件
    new HtmlWebpackPlugin({
      title: "管理输出",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/", //webpack-dev-middleware设置，yarn server//本示例只是运行3000端口一下
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
    //防止重复
    splitChunks: {
      chunks: "all",
    },
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
