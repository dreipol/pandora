module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: ['fp', 'prettier'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'fp/no-class': 'error',
    'fp/no-delete': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'error',
    'fp/no-mutating-assign': 'error',
    'fp/no-proxy': 'error',
  },
}
