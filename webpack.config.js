const Dotenv = require("./node_modules/dotenv-webpack");

const config = {
    entry: ["./app/js/index.js"],
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loaders: ["babel-loader"]
        },
        {
          test:/\.css$/,
          exclude: /node_modules/,
          use:["style-loader","css-loader"]
        }
      ]
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new Dotenv()
    ]
  };
  
module.exports = config