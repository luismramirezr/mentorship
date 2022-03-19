const configuration = require('@mentorship/jest-config');

const { name } = require('./package.json');

module.exports = {
  ...configuration,
  displayName: name,
  moduleNameMapper: {
    '^domain/(.*)$': '<rootDir>/src/domain/$1',
    '^modules/(.*)$': '<rootDir>/src/modules/$1',
    '^tests/(.*)$': '<rootDir>/src/tests/$1',
  },
};
