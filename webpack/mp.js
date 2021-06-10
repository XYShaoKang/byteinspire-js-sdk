const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./common');
const { version } = require('@package/../../package.json');

const mpApp = merge(config, {
  mode: 'none',
  output: {
    filename: `inspirecloud-mp-${version}.js`
  },
  resolve: {
    aliasFields: ['weapp', 'browser'] // 此处取名为 weapp 主要是为了和 wepy、mpvue 等兼容
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `var __target = window||global;
if (typeof wx === 'undefined' && typeof tt !== 'undefined') {
  __target.wx = tt;
}`,
      raw: true
    })
  ]
});

const mpAppMin = merge(mpApp, {
  mode: 'production',
  output: {
    filename: `inspirecloud-mp-${version}.min.js`
  }
});

module.exports = [mpApp, mpAppMin];
