const merge = require('webpack-merge');
const config = require('./common');
const { version } = require('@package/../../package.json');

const browser = merge(config, {
  mode: 'none',
  output: {
    filename: `inspirecloud-browser-${version}.js`
  }
});

const browserMin = merge(config, {
  mode: 'production',
  output: {
    filename: `inspirecloud-browser-${version}.min.js`
  }
});

module.exports = [browser, browserMin];
