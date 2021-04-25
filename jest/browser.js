const common = require('./common');

module.exports = {
  ...common,
  globals: {
    NODE_ENV: 'test',
    TEST_ENV: 'browser'
  },
  testEnvironment: 'jsdom',
  resolver: '<rootDir>/jest/resolver.js'
};
