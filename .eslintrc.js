module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'avoidEscape': true,
    /* 'jsx-quotes': [2, 'prefer-single'], */
    /* 'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }] */
  },
};
