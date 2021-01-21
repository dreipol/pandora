// Base rules
module.exports.prettier = require('./.prettierrc.js')
module.exports.eslint = require('./.eslintrc.js')

// Vue rules
module.exports.eslintVue = require('./vue/.eslintrc.js')
module.exports.prettierVue = require('./vue/.prettierrc.js')

// Stylelint rules
module.exports.stylelint = {
  bemPattern: require('./stylelint/config-bem-pattern/.stylelintrc.js'),
}
