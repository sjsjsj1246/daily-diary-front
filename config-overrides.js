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
    "@server": path.resolve(__dirname, "src", "server"),
    "@modules": path.resolve(__dirname, "src", "modules"),
    "@apis": path.resolve(__dirname, "src", "apis"),
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
