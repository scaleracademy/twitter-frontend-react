const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    https: false,
    hot: true,
    port: 5000,
    open: true,
    contentBase: path.join(__dirname, "src"),
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      Actions: path.resolve(process.cwd(), "src/actions/"),
      Components: path.resolve(process.cwd(), "src/components/"),
      Enums: path.resolve(process.cwd(), "src/enums/"),
      Pages: path.resolve(process.cwd(), "src/pages/"),
      Reducers: path.resolve(process.cwd(), "src/reducers/"),
      Routes: path.resolve(process.cwd(), "src/routes/"),
      Src: path.resolve(process.cwd(), "src/"),
      Types: path.resolve(process.cwd(), "src/types/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
              emitFile: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
