const configuration = require('@mentorship/jest-config');

const { name } = require('./package.json');

module.exports = {
  ...configuration,
  displayName: name,
};
