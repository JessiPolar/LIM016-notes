module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    "quotes": ["error", "double"],
    /* 'jsx-quotes': [2, 'prefer-doble'], */
    /* 'files.eol': '\n', */
     'avoidEscape': true, 
    /* 'jsx-quotes': [2, 'prefer-single'], */
    /* 'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }] */
    'react/prop-types': 'off',
    'linebreak-style': ['error', 'windows'],

  },
};
