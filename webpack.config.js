const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "website", "main.ts"),
    experiments: {
      topLevelAwait: true,
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: "ts-loader",
            options: {
                configFile: path.resolve(__dirname, "tsconfig.webpack.json"),
            }
        }],
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
