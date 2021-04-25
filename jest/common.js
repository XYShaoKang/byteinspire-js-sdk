const path = require('path');

module.exports = {
  preset: 'ts-jest',
  verbose: true,
  collectCoverage: true,
  rootDir: path.resolve(__dirname, '../'),
  testMatch: ['**/test/**/*.test.ts'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
