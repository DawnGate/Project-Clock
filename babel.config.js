const alias = { "^@/(.+)": "./src/\\1" };
const extensions = [".android.js", ".ios.js", ".js", ".json", ".native"];

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["module-resolver", { alias, extensions }]],
  };
};
