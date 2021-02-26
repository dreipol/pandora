const eslintBase = require.resolve('./.eslintrc.js')
const eslintVue = require.resolve('./vue/.eslintrc.js')

const prettierBase = require('./.prettierrc.js')
const prettierVue = require('./vue/.prettierrc.js')

const stylelintBase = require('./stylelint/config-base/.stylelintrc.js')
const stylelintScss = require('./stylelint/config-scss/.stylelintrc.js')
const stylelintBemPattern = require('./stylelint/config-bem-pattern/.stylelintrc.js')
const stylelintOrder = require('./stylelint/config-order/.stylelintrc.js')

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
