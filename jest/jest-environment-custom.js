const NodeEnvironment = require('jest-environment-node');

module.exports = class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.global.Uint8Array = Uint8Array;
  }
};
