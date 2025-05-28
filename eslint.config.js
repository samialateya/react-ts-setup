import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslintConfigPrettier,
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      eslintPluginUnicorn.configs.recommended,
      ...tseslint.configs.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          checkFilenames: false,
          checkProperties: true,
          checkVariables: true,
          allowList: {
            props: true,
            prop: true,
            Props: true,
            Prop: true,
            ref: true,
            refs: true,
            Ref: true,
            Refs: true,
            lib: true,
          },
        },
      ],
    },
  }
);
