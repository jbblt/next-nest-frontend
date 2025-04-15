import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules",
      "dist",
      ".next",
      "out",
      "coverage",
      "src/types/*",
    ],
  },
  {
    files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];
