module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'react/jsx-curly-spacing': [0, 'never'],
    'react/jsx-indent': [0, 2],
    'arrow-parens': [0, 'as-needed'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': [0],
  },
};
