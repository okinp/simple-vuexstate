const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        scss: path.resolve(__dirname, "src/scss/"),
        comps: path.resolve(__dirname, "src/components/"),
        atoms: path.resolve(__dirname, "src/components/atoms/"),
        molecules: path.resolve(__dirname, "src/components/molecules/"),
        assets: path.resolve(__dirname, "src/assets/"),
        src: path.resolve(__dirname, "src/"),
        root: path.resolve(__dirname, "./"),
        store: path.resolve(__dirname, "src/store/")
      },
      extensions: [".vue", ".js", ".json"]
    }
  }
};
