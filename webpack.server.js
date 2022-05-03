const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //inform webpack that we are building a bundle for node js rather then browser
  target: "node",

  //tell webpack the root file of our server application
  entry: "./src/index.js",

  //where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
  //tell webpack to run babel on every file it runs through
};
module.exports = merge(baseConfig, config);
