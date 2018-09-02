module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // TODO: Prevent multiple component definition per file
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    // TODO: Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'off',
    // TODO: only .jsx files may have JSX
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
    // TODO: Enforce spacing around jsx equals signs
    'react/jsx-equals-spacing': ['error', 'always'],
    // TODO:Enforce component methods order
    'react/sort-comp': [
      'error', {
        order: [
          'statics',
          'instance-variables',
          'lifecycle',
          '/^on.+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
    // TODO: Enforce props alphabetical sorting
    'react/jsx-sort-props': [
      'error', {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    // TODO: Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': [
      'error', {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/forbid-prop-types': ['error', { forbid: ['any', 'array', 'object'] }],
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'always' }],
    'react/jsx-no-bind': [
      'error', {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': ['error', { allowAllCaps: true, ignore: [] }],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': 'error',
    'react/no-danger': 'warn',
    'react/no-deprecated': ['error'],
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prop-types': ['error', { ignore: [], customValidators: [], skipUndeclared: false }],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-wrap-multilines': [
      'error', {
        declaration: true,
        assignment: true,
        return: true,
        arrow: true,
      },
    ],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/no-render-return-value': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unused-prop-types': [
      'error', {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/style-prop-object': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-tag-spacing': [
      'error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/void-dom-elements-no-children': 'error',
    'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
    'react/no-redundant-should-component-update': 'error',
    'react/no-unused-state': 'error',
    'react/no-typos': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'class-methods-use-this': [
      'off', {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
        ],
      },
    ],
    'react/display-name': ['off', { ignoreTranspilerName: false }],
    'react/jsx-no-literals': ['off', { noStrings: true }],
    'react/sort-prop-types': ['off', { ignoreCase: true, callbacksLast: false, requiredFirst: false }],
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'off',
    'react/no-will-update-set-state': 'off',
    'react/no-set-state': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react/require-optimization': ['off', { allowDecorators: [] }],
    'react/forbid-component-props': ['off', { forbid: [] }],
    'react/forbid-elements': ['off', { forbid: [] }],
    'react/jsx-space-before-closing': ['off', 'always'],
    'react/no-array-index-key': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/boolean-prop-naming': [
      'off', {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
    react: {
      pragma: 'React',
      version: '15.0',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      'exact',
      'Object.freeze',
    ],
  },
};
