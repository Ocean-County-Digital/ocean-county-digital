import { defineConfig } from 'eslint-define-config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

// Import the Next.js plugin correctly
import nextPlugin from '@next/eslint-plugin-next';

export default tseslint.config(
  defineConfig({
    // Base JS configuration
    ...js.configs.recommended,

    // Extend with TypeScript ESLint recommended configs
    extends: [...tseslint.configs.recommended],

    // React configuration
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      '@next/next': nextPlugin, // Use the correct namespace for Next.js plugin
    },

    // Global settings with browser and Node.js environments
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    // Common rules for all files
    rules: {
      // React rules
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require React import
      'react/prop-types': 'off', // TypeScript handles prop validation

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Next.js rules - handle them properly
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-img-element': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-script-component-in-head': 'error',
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-styled-jsx-in-document': 'error',
      '@next/next/no-title-in-document-head': 'error',
      '@next/next/no-typos': 'warn',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  }),

  // TypeScript files specific configuration
  defineConfig({
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
    },
  }),

  // JavaScript files specific configuration
  defineConfig({
    files: ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'],
    rules: {
      // JavaScript specific rules
    },
  }),

  // Override rules for specific directories
  defineConfig({
    files: ['**/pages/**/*.{ts,tsx}', '**/app/**/*.{ts,tsx}'],
    rules: {
      // Next.js specific rules for pages and app directory
      'import/no-default-export': 'off',
    },
  }),

  // Config for test files
  defineConfig({
    files: [
      '**/*.test.{ts,tsx}',
      '**/*.spec.{ts,tsx}',
      '**/tests/**/*.{ts,tsx}',
    ],
    rules: {
      // Relaxed rules for test files
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  })
);
