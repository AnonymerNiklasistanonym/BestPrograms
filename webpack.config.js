const path = require("path");

module.exports = {
    entry: "./website/main.ts",
    experiments: {
      topLevelAwait: true,
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.handlebars$/,
          loader: "handlebars-loader",
        }
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
};
