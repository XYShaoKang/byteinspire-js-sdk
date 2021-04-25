const merge = require('webpack-merge');
const config = require('./common');

const browser = merge(config, {
  mode: 'none',
  output: {
    filename: 'inspirecloud-browser.js'
  }
});

const browserMin = merge(config, {
  mode: 'production',
  output: {
    filename: 'inspirecloud-browser.min.js'
  }
});

module.exports = [
  browser,
  browserMin
];
