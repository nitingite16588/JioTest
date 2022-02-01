const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  var DEV_MODE = env.development ? true : false;
  console.log(DEV_MODE);
  return {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: "babel-loader",
          resolve: {
            extensions: [".js", ".jsx"],
          },
        },

        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: "url-loader",
            },
          ],
        },
      ],
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
    ],

    devServer: {
      historyApiFallback: true,
      // compress: true,
    },

    //devtool: DEV_MODE ? "source-map" : "source-map",
    mode: DEV_MODE ? "development" : "production",
  };
};
