module.exports = {
  env: {
    node: true,
  },
  rules: {
    // TODO: Запрет require
    'global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'handle-callback-err': 'off',
    'no-mixed-requires': ['off', false],
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'callback-return': 'off',
  },
};
