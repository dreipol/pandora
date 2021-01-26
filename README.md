# pandora
This repo contains all dreipol eslint and prettier rules to build any kind of project


# Installation

Notice that all the `@dreipol/pandora` peer dependencies should be installed manually. For this reason we need to explicitly define their major version.

```shell
# Install the linting tools
npm i -D eslint@7 prettier@2

# Install the plugins used in @dreipol/pandora
npm i -D eslint-config-airbnb-base@14 eslint-config-prettier@7 eslint-plugin-fp@2 eslint-plugin-import@2

# Install @dreipol/pandora
npm i -D @dreipol/pandora
```

## Optional IDE Configuration

- Install eslint in [your IDE](https://eslint.org/docs/user-guide/integrations)
- Install prettier in [your IDE](https://prettier.io/docs/en/editors.html)

# Eslint Setup

Set up your eslint config (`.eslintrc.js`) file as follows to enable the `@dreipol/pandora` eslint rules in your project

```js
module.exports = {
  extends: [require.resolve('@dreipol/pandora/.eslintrc')]
}
```

# Prettier Setup

Set up your prettier config (`.prettierrc.js`) file as follows to enable the `@dreipol/pandora` prettier rules in your project

```js
const { prettier } = require('@dreipol/pandora')

module.exports = prettier
```


# Vue Setup

## Installation

For Vue Project we need to install one additional plugin `eslint-plugin-vue`

```shell
npm i eslint-plugin-vue@7
```

## Eslint Setup

To enable the Vue.js linting you should add the following extension to your eslint config (`.eslintrc.js`) file:

```diff
module.exports = {
  extends: [
    require.resolve('@dreipol/pandora/.eslintrc'), 
+   require.resolve('@dreipol/pandora/vue/.eslintrc')
  ]
}
```

## Prettier Setup

To let prettier format your Vue.js files you can simply setup your prettier config (`.prettierrc.js`) file as follows

```js
const { prettierVue } = require('@dreipol/pandora')

module.exports = prettierVue
```

# Stylelint Setup

## Stylelint Config

```shell
npm i stylelint@13
```


## Stylelint BEM Patterns Config
dreipol stylelint config file for bem selectors

```shell
npm i stylelint-selector-bem-pattern@2
```

## Setup in Project
Set up your stylelint config (`.stylelintrc.js`) file as follows to enable the `@dreipol/pandora` eslint rules in your project

```js
module.exports = {
  extends: [require.resolve('@dreipol/pandora/stylelint/config-base/.stylelintrc')]
}
module.exports = {
  extends: [require.resolve('@dreipol/pandora/stylelint/config-bem-pattern/.stylelintrc')]
}
```
