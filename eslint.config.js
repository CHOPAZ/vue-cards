import vue from 'eslint-plugin-vue'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
  js.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.vue', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    endv: {
      browser: true,
      node: true,
    },
    rules: {
      'vue/multi-word-component-names': 'off', // Отключаем требование длинных имен
      'vue/require-default-prop': 'off', // Не требовать обязательные default props
    },
  },
]
