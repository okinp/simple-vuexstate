const path = require("path");
module.exports = {
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "storybook-addon-vue-info/loader",
        enforce: "post"
      },
      {
        test: /\.stories\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" },
          { loader: require.resolve("@storybook/addon-storysource/loader") }
        ],
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [/\.*\/font/i],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: [":data-src"]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      scss: path.resolve(__dirname, "../src/scss/"),
      comps: path.resolve(__dirname, "../src/components/"),
      atoms: path.resolve(__dirname, "../src/components/atoms/"),
      molecules: path.resolve(__dirname, "../src/components/molecules/"),
      assets: path.resolve(__dirname, "../src/assets/"),
      src: path.resolve(__dirname, "../src/"),
      root: path.resolve(__dirname, "../"),
      store: path.resolve(__dirname, "../src/store/")
    },
    extensions: [".vue", ".js", ".json"]
  }
};
