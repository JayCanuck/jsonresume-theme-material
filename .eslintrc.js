module.exports = {
  env: {
    node: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended', 'prettier'],
  rules: {
    'arrow-parens': ['off', 'always'],
    'brace-style': ['off', 'off'],
    'comma-dangle': 'off',
    'complexity': 'off',
    'constructor-super': 'error',
    'eol-last': 'off',
    'eqeqeq': ['error', 'smart'],
    'guard-for-in': 'error',
    'id-blacklist': [
      'error',
      'any',
      'Number',
      'number',
      'String',
      'string',
      'Boolean',
      'boolean',
      'Undefined',
      'undefined'
    ],
    'id-match': 'error',
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    'import/no-named-as-default': 'off', // Changed off for frontend
    'import/no-named-as-default-member': 'off', // Changed off for frontend
    'import/no-unresolved': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-case-declarations': 'off',
    'no-cond-assign': 'error',
    'no-console': 'off', // Changed off for frontend
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'off',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-shadow': [
      'off',
      {
        hoist: 'all'
      }
    ],
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },

      // empty line before control flow blocks
      { blankLine: 'always', prev: '*', next: ['switch', 'for', 'while', 'do'] },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'try' },
      { blankLine: 'always', prev: '*', next: 'with' },

      // Empty line before and after vars declarations
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
    ],
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'quote-props': 'off',
    'radix': 'error',
    'react/display-name': 'off',
    'sort-imports': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': ['off', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off'
  },
  ignorePatterns: ['/**/node_modules/*', '/**/.cache/*', '/**/public/*']
};
