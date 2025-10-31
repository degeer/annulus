import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import promisePlugin from 'eslint-plugin-promise'
import babelParser from '@babel/eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    plugins: {
      react,
      prettier,
      import: importPlugin,
      promise: promisePlugin
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          legacyDecorators: true,
          jsx: true
        },
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react']
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        Buffer: 'readonly',
        global: 'readonly'
      }
    },
    settings: {
      react: {
        version: '18'
      }
    },
    rules: {
      'space-before-function-paren': 0,
      'react/prop-types': 0,
      'react/jsx-handler-names': 0,
      'react/jsx-fragments': 0,
      'react/no-unused-prop-types': 0,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'import/export': 0,
      'no-unused-vars': 'warn',
      'no-constant-binary-expression': 'warn',
      'prettier/prettier': 'error'
    }
  },
  {
    files: ['src/**/*.{js,jsx}', 'example/src/**/*.test.{js,jsx}'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        expect: 'readonly',
        test: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly'
      }
    }
  },
  {
    ignores: ['dist/', 'node_modules/', 'example/node_modules/', 'build/']
  }
]
