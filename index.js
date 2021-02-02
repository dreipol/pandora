// Eslint rules
module.exports.eslint = {
  base: require('./.eslintrc.js'),
  vue: require('./vue/.eslintrc.js'),
}

// Stylelint rules
module.exports.prettier = {
  base: require('./.prettierrc.js'),
  vue: require('./vue/.prettierrc.js'),
}

// Stylelint rules
module.exports.stylelint = {
  base: require('./stylelint/config-base/.stylelintrc.js'),
  scss: require('./stylelint/config-scss/.stylelintrc.js'),
  bemPattern: require('./stylelint/config-bem-pattern/.stylelintrc.js'),
  order: require('./stylelint/config-order/.stylelintrc.js'),
}
