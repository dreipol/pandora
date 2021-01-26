// Base rules
module.exports.prettier = require('./.prettierrc.js')
module.exports.eslint = require('./.eslintrc.js')

// Vue rules
module.exports.eslintVue = require('./vue/.eslintrc.js')
module.exports.prettierVue = require('./vue/.prettierrc.js')

// Stylelint rules
module.exports.stylelint = {
  base: require('./stylelint/config-base/.stylelintrc.js'),
  scss: require('./stylelint/config-scss/.stylelintrc.js'),
  bemPattern: require('./stylelint/config-bem-pattern/.stylelintrc.js')
}
