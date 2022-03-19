module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'jest.config.js'],
  rules: {
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    indent: 'off',
    'no-new': 'off',
    '@typescript-eslint/indent': 'off',
    'max-len': ['error', 120],
    'import/prefer-default-export': 'off',
  },
};
