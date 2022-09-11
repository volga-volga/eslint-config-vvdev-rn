module.exports = {
  rules: {
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'off',// used rule from typescript
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
    'no-undef-init': 'off',
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
  },
};
