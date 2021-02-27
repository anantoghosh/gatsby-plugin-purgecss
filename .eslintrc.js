module.exports = {
  ignorePatterns: ['testData.ts'],
  extends: ['eslint-config-good-code'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  },
};
