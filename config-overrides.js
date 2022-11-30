/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { override, getBabelLoader, addWebpackAlias } = require("customize-cra");

module.exports = override(
  removeBuiltinBabelConfig,
  enableBabelConfig,
  addWebpackAlias({
    "@pages": path.resolve(__dirname, "src", "pages"),
    "@components": path.resolve(__dirname, "src", "components"),
    "@containers": path.resolve(__dirname, "src", "containers"),
    "@recoil": path.resolve(__dirname, "src", "recoil"),
    "@mocks": path.resolve(__dirname, "src", "mocks"),
    "@layouts": path.resolve(__dirname, "src", "layouts"),
    "@assets": path.resolve(__dirname, "src", "assets"),
    "@apis": path.resolve(__dirname, "src", "apis"),
    "@utils": path.resolve(__dirname, "src", "utils"),
  })
);

function removeBuiltinBabelConfig(config) {
  const loader = getBabelLoader(config);

  loader.options.presets = [];
  loader.options.plugins = [];

  return config;
}

function enableBabelConfig(config) {
  const loader = getBabelLoader(config);
  loader.options.configFile = path.resolve(__dirname, "babel.config.js");
  return config;
}
