module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: './__tests__/tsconfig.eslint.json',
    },
  },
};
