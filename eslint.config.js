import typescriptParse from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react/self-closing-comp': 'error',
      'prettier/prettier': [
        'error',
        {
          printWidth: 80,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'always',
          semi: false,
          endOfLine: 'auto',
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      '@typescript-eslint/no-empty-object-type': 0,
      'jsx-a11y/alt-text': [
        'warn',
        {
          elements: ['img'],
          img: ['Image'],
        },
      ],
      'jsx-a11y/aria-props': 'warn',
      'jsx-a11y/aria-proptypes': 'warn',
      'jsx-a11y/aria-unsupported-elements': 'warn',
      'jsx-a11y/role-has-required-aria-props': 'warn',
      'jsx-a11y/role-supports-aria-props': 'warn',
      'react/no-unknown-property': 'error',
    },

    files: ['**/*.{ts,tsx}'],

    languageOptions: {
      parser: typescriptParse,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        globals: {
          ...globals.browser,
          ...globals.jest,
        },
      },
    },

    plugins: {
      prettier: prettier,
      react: react,
      tseslint: tseslint,
      'jsx-a11y': jsxA11y,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    settings: {
      react: {
        version: 'detect',
      },
      'import/parsers': {
        [typescriptParse]: ['.ts', '.tsx', '.d.ts'],
      },
    },

    ignores: ['node_modules', 'dist'],
  },
];
