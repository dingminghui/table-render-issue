module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/recommended",
  ],
  plugins: [
    // plugins
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
    "prefer-const": "warn",
    "max-params": ["warn", 3],
    "dot-notation": "warn",
    "no-var": "error",
    "no-delete-var": "error",
    // "no-duplicate-imports": "error",
    "no-unused-vars": [
      "warn",
      {
        args: "none",
      },
    ],
    "no-console": ["warn", { allow: ["warn", "error"] }],
    eqeqeq: ["error", "always"],
    "no-case-declarations": ["error"],
    "no-shadow-restricted-names": ["error"],
    "no-self-compare": ["error"],
    "no-shadow": "off",
    // https://typescript-eslint.io/rules/no-redeclare/
    "no-redeclare": "off",
    // https://eslint.org/docs/latest/rules/no-async-promise-executor
    "no-async-promise-executor": "off",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        ignoreTypeValueShadow: true,
      },
    ],

    // https://typescript-eslint.io/rules/consistent-type-imports/
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "separate-type-imports",
      },
    ],
    "import/no-unresolved": ["off"],
    // "@typescript-eslint/no-import-type-side-effects": ["warn"],
    // "import/no-duplicates": ["warn", { "prefer-inline": true }],

    "jsx-a11y/no-autofocus": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-target-blank": ["warn", { allowReferrer: true }],
    "react/no-array-index-key": "warn",

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    "react/jsx-key": [
      "error",
      {
        warnOnDuplicates: true,
      },
    ],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
    "react/jsx-no-constructed-context-values": "warn",

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    "react/jsx-no-leaked-render": ["warn"],

    // 'react/jsx-props-no-spreading': ['warn'],

    // 'react/jsx-sort-props': ['warn'],

    "react/no-children-prop": [
      "warn",
      // {
      //   allowFunctions: false,
      // },
    ],
    "react/self-closing-comp": ["warn"],

    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    "react/no-danger-with-children": ["warn"],
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-object-type-as-default-prop.md
    "react/no-object-type-as-default-prop": ["warn"],

    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react-hooks/exhaustive-deps": "warn",

    "react/button-has-type": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
