const path = require("path");

module.exports = {
  entry: {
    content_scripts: "./src/contentScripts/cookie-fiend.js",
    browser_action: "./src/browserAction/script.js"
  },
  output: {
    path: path.resolve(__dirname, "addon"),
    filename: "[name]/index.js"
  }
};
