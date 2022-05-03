const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
  //tell webpack the root file of our server application
  entry: "./src/client/client.js",

  //where to put output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },

  //tell webpack to run babel on every file it runs through
};
module.exports = merge(baseConfig, config);
