module.exports = {
  rules: {
    'array-bracket-newline': ['error', { multiline: true }],
    'array-element-newline': ['off', { multiline: true }],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],

    'capitalized-comments': ['off', 'never'],
    'comma-dangle': [
      'error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': 'off',
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    indent: [
      'error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: ['JSXElement', 'JSXElement *'],
      },
    ],

    'linebreak-style': ['error', 'unix'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'lines-around-directive': [
      'error', {
        before: 'always',
        after: 'always',
      },
    ],
    'max-len': [
      'off', 120, 2, {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    'new-cap': [
      'error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
      },
    ],
    'new-parens': 'error',

    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': ['error'],

    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-restricted-syntax': [
      'off',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': [
      'error', {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error', {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ],
    'object-property-newline': [
      'error', {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': [
      'error', {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
    ],
    'quote-props': [
      'error', 'as-needed', {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error', {
        before: false,
        after: true,
      },
    ],
    'semi-style': ['error', 'last'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error', {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error', {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'spaced-comment': [
      'error', 'always', {
        line: {},
        block: {
          balanced: true,
        },
      },
    ],
    'func-names': 'error',
    'switch-colon-spacing': [
      'error', {
        after: true,
        before: false,
      },
    ],
    camelcase: ['off', { properties: 'never' }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': [
      'error', {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error', {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true },
        },
      },
    ],
    'max-lines': [
      'off', {
        max: 800,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'no-lonely-if': 'off',
    'no-mixed-operators': [
      'error', {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'template-tag-spacing': ['off', 'never'],
    'unicode-bom': ['error', 'never'],
    'no-bitwise': 'error',
    'no-continue': 'off',
    'func-name-matching': ['off', 'always', { includeCommonJSModuleExports: false }],
    'lines-around-comment': 'off',
    'func-style': ['off', 'expression'],
    'id-blacklist': 'off',
    'function-paren-newline': ['error', 'multiline'],
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': [
      'off', {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'max-depth': ['off', 4],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['off', { max: 1 }],
    'multiline-comment-style': ['off', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'no-array-constructor': 'off',
    'no-inline-comments': 'off',
    'no-negated-condition': 'off',
    'no-plusplus': 'off',
    'no-ternary': 'off',
    'no-underscore-dangle': [
      'off', {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: false,
      },
    ],
    'nonblock-statement-body-position': 'off',
    'padding-line-between-statements': 'off',
    'require-jsdoc': 'off',
    'sort-keys': [
      'off', 'asc', {
        caseSensitive: false,
        natural: true,
      },
    ],
    'sort-vars': 'off',
    'wrap-regex': 'off',
  },
};
