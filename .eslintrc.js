/* global module */
/* eslint no-undef: "error" */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: [2, "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
