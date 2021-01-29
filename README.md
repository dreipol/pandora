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

module.exports = prettier.base
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
const { pettier } = require('@dreipol/pandora')

module.exports = prettier.vue
```

# Stylelint Setup

## Stylelint Installation
Make sure to have Stylelint installed in your project before proceeding with the following steps

```shell
npm i stylelint@13
```

### Stylelint Basic Rules Config
In case you want to use only the basic pandora stylelint rules in your project you can setup your `.stylelintrc.js` file as follows

```js
module.exports = {
  extends: [require.resolve('@dreipol/pandora/stylelint/config-base/.stylelintrc')],
}
```


### Stylelint SCSS Config
Does your project use SCSS files? No problems... you can enable the pandora stylelint rules for scss. 
First you need to install the `stylelint-scss` dependency

```shell
npm i stylelint-scss@3
```

You can then update your `.stylelintrc.js` file as follows

```diff
module.exports = {
  extends: [
    require.resolve('@dreipol/pandora/stylelint/config-base/.stylelintrc')
+   require.resolve('@dreipol/pandora/stylelint/config-scss/.stylelintrc'),
  ],
}
```

### Stylelint BEM Patterns Config
To make sure your classes will be properly named according to [BEM](http://getbem.com/), you might enable the pandora bem pattern plugin.
First you need to install `stylelint-selector-bem-pattern`

```shell
npm i stylelint-selector-bem-pattern@2
```

You can then update your `.stylelintrc.js` file as follows

```diff
module.exports = {
  extends: [
    require.resolve('@dreipol/pandora/stylelint/config-base/.stylelintrc')
    require.resolve('@dreipol/pandora/stylelint/config-scss/.stylelintrc'),
+   require.resolve('@dreipol/pandora/stylelint/config-bem-pattern/.stylelintrc')
  ],
}
```

### Stylelint Order Config
Do you care about the order of your css properties? In that case the pandora `stylelint/config-order` is what you are looking for.
First install `stylelint-order`

```shell
npm i stylelint-order@4
```

Then update your `.stylelintrc.js` file as follows

```diff
module.exports = {
  extends: [
    require.resolve('@dreipol/pandora/stylelint/config-base/.stylelintrc')
    require.resolve('@dreipol/pandora/stylelint/config-scss/.stylelintrc'),
    require.resolve('@dreipol/pandora/stylelint/config-bem-pattern/.stylelintrc'),
+   require.resolve('@dreipol/pandora/stylelint/config-order/.stylelintrc')
  ],
}
```
