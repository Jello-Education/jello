module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', 'ts', 'tsx'],
      },
    ],
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    camelcase: 'off',
    curly: 'error',
    'global-require': 'off',
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'jest/expect-expect': 'off',
    'jest/no-disabled-tests': 'off',
    'no-console': ['warn', { allow: ['error'] }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-danger': 'off',
    'react/sort-comp': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'either',
      },
    ],
  },
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true,
  },
  settings: {
    'import/no-unresolved': 'off',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: 'babel-eslint',
};
