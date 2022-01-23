module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['off'],
    'semi': ['off'],
    'vue/no-multiple-template-root': 'off',
    'no-unused-vars': 0,
    'no-multi-spaces': 0,
    'no-useless-escape': 0,
    'no-trailing-spaces': 0,
    'no-multiple-empty-lines': 0,
    'eol-last': 0,
    'keyword-spacing': 0,
    'space-before-function-paren': 0
  }
}
