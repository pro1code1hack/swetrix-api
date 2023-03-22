module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'lodash',
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    // 'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'lodash/prefer-lodash-method': 'off', // disabled because lodash considers some of the typeorm methods as unsafe
    // 'lodash/prefer-lodash-method': 'warn',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'import/no-cycle': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    'lines-between-class-members': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-bitwise': 'off',
    'no-continue': 'off',
    'no-empty-function': 'off',
    'no-nested-ternary': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    '@typescript-eslint/no-unused-vars': 'off', // disabled in favour of no-unused-vars
    'no-unused-vars': 'warn',
    'semi': [
      'error',
      'never'
    ]
  },
};
