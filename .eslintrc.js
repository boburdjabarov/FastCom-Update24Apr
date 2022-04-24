module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 4],
    semi: [2, "always"],
    "space-before-function-paren": ["error", "never"],
    // "multiline-ternary": ["error", "always-multiline"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "comma-dangle": ["error", "never"],
    parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
};
