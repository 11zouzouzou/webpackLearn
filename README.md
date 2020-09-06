#learn webpackv4.x

#init

npm init -y ;
yarn add webpack webpack --save-dev ;
新建 webpack.config.js;

#管理资源

yarn add css-loader style-loader file-loader csv-loader xml-loader;(CSS ,图片文件加载，csv\XML 加载)；

#管理输出

yarn add clean-webpack-plugin html-webpack-plugin;(清除与搭建 dist 中 html)

#开发环境搭建

yarn add webpack-dev-server express webpack-dev-middleware;(dev 开发与 server 开发);
