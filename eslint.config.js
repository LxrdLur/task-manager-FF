import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    '*.min.*',
    'coverage',
  ]),

  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,

      // React + JSX best practices
      react.configs.flat.recommended,
      jsxA11y.configs.flat.recommended,

      // Hooks rules
      reactHooks.configs.flat.recommended,

      // Vite + React refresh related rules
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    settings: {
      react: { version: 'detect' },
    },

    rules: {
      // Твоё правило — оставил
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // React 17+ не требует React в scope
      'react/react-in-jsx-scope': 'off',

      // Если ты не используешь PropTypes (обычно в Vite/React так)
      'react/prop-types': 'off',

      // Часто мешает при простых проектах/прототипах
      'react/no-unescaped-entities': 'off',

      // Чуть строже и полезнее в реальных проектах
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',
    },
  },
])
