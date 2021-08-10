const eslintBase = require.resolve('./eslint/eslint-base')
const eslintTypescript = require.resolve('./eslint/eslint-typescript')
const eslintVue = require.resolve('./eslint/eslint-vue')
const eslintVueTypescript = require.resolve('./eslint/eslint-vue-typescript')
const eslintReact = require.resolve('./eslint/eslint-react')

const prettierBase = require('./prettier/prettier-base')
const prettierVue = require('./prettier/prettier-vue')

const stylelintBase = require.resolve('./stylelint/stylelint-base')
const stylelintScss = require.resolve('./stylelint/stylelint-scss')
const stylelintBemPattern = require.resolve('./stylelint/stylelint-bem-pattern')
const stylelintOrder = require.resolve('./stylelint/stylelint-order')

// Eslint rules
module.exports.eslint = {
  base: eslintBase,
  vue: eslintVue,
  react: eslintReact,
  typescript: eslintTypescript,
  vueTypescript: eslintVueTypescript,
}

// Stylelint rules
module.exports.prettier = {
  base: prettierBase,
  vue: prettierVue,
}

// Stylelint rules
module.exports.stylelint = {
  base: stylelintBase,
  scss: stylelintScss,
  bemPattern: stylelintBemPattern,
  order: stylelintOrder,
}
