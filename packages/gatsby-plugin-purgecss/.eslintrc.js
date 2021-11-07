var path = require('path');

module.exports = {
  ignorePatterns: ['testData.ts'],
  extends: ['eslint-config-good-code'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
};
