module.exports = {
  root: true,
  ignorePatterns: ['.eslintrc'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.scripts.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
};
