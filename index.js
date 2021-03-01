const eslintBase = require.resolve('./eslint/eslint-base')
const eslintVue = require.resolve('./eslint/eslint-vue')

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
