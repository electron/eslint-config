import js from "@eslint/js";
import pkg from "typescript-eslint";

const { parser, plugins } = pkg;

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parser,
      ecmaVersion: 6,
      sourceType: "module",
      globals: {
        node: true,
      },
    },
    plugins: { ...plugins },
    rules: {
      semi: ["error", "always"],
      "no-var": "error",
      "no-unused-vars": "off",
      "no-global-assign": "off",
      "guard-for-in": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
        },
      ],
      "prefer-const": [
        "error",
        {
          destructuring: "all",
        },
      ],
      "node/no-callback-literal": "off",
      "node/no-deprecated-api": "off",
    },
  },
  {
    files: ["*.js"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  {
    files: ["*.ts"],
    rules: {
      "no-undef": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": ["error"],
      "no-use-before-define": "off",
    },
  },
  {
    files: ["*.d.ts"],
    rules: {
      "no-useless-constructor": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
