module.exports = {
  clearMocks: true,
  transform: { '^.+\\.tsx?$': 'ts-jest' },
  testMatch: ['**/src/tests/**/*.(spec|test).ts?(x)'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
};
