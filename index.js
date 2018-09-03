module.exports = {
  extends: [
    './rules/best-practices',
    './rules/errors',
    './rules/node',
    './rules/style',
    './rules/variables',
    './rules/es6',
    './rules/imports',

    './rules/react',
    './rules/react-a11y',
  ].map(require.resolve),
  parser: 'babel-eslint',
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
  globals: {
    fetch: false,
    __DEV__: false,
    btoa: false,
    alert: false,
    window: false,
    document: false,
  },
  env: {es6: true},
};
