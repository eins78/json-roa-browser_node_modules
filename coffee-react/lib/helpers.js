// Generated by CoffeeScript 1.9.1
var helpers;

helpers = require('coffee-script/lib/coffee-script/helpers');

helpers.isCoffee = function(filepath) {
  return /\.((lit)?coffee|coffee\.md|cjsx)$/.test(filepath);
};

helpers.hasCJSXExtension = function(filepath) {
  return /\.(cjsx)$/.test(filepath);
};

helpers.hasCJSXPragma = function(src) {
  return /^\s*#\s*@(cjsx)/.test(src);
};

module.exports = helpers;
