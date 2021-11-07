module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "**/?(*.)+(spec|test).[jt]s?(x)" ],
  globals: {
    'ts-jest': {
      tsconfig: './__tests__/tsconfig.eslint.json',
    },
  },
};
