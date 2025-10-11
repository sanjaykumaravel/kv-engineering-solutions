import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactPlugin from "eslint-plugin-react";
import { FlatCompat } from "@eslint/eslintrc";
import url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

export default [
  // Base JS rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...compat.extends("plugin:@typescript-eslint/recommended"),

  // Next.js core web vitals rules
  ...compat.extends("plugin:@next/next/core-web-vitals"),

  // Prettier integration
  ...compat.extends("plugin:prettier/recommended"),

  // Project overrides
  {
    files: ["**/*.{ts,tsx}"],
    ignores: [
      "dist",
      "node_modules",
      ".next",
      "*.js",
      "eslint.config.js",
      "next.config.js",
    ],

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
      },
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: reactPlugin,
    },

    rules: {
      // React Hooks
      ...reactHooks.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,

      // React Refresh
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // TypeScript
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-interface": "warn",

      // JS
      "no-irregular-whitespace": "warn",

      // Next.js
      "@next/next/no-html-link-for-pages": "error",

      // React
      "react/prop-types": "off",
    },

    settings: {
      react: { version: "detect" },
    },
  },
];
