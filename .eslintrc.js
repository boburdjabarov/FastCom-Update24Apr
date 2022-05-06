module.exports = {
    env: {
        browser: true,
        es2021: true
    },

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
    },

    rules: {
        indent: ["error", 4],
        semi: [2, "always"],
        "space-before-function-paren": [
            "error",
            { anonymus: "always", named: "never" }
        ],
        // "multiline-ternary": ["error", "always-multiline"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        "comma-dangle": ["error", "never"]
        // parserOptions: {
        //     ecmaVersion: 6,
        //     sourceType: "module",
        //     ecmaFeatures: {
        //         jsx: true
        //     }
    },
    plugins: ["react", "prettier"],
    extends: [
        "plugin:react/recommended",
        "standard",
        "plugin:prettier/recommended"
    ]
    // "react/prop-types": "off"
};
