# pandora

<img src="https://raw.githubusercontent.com/dreipol/pandora/main/logo.png" width="50%"/>

[![Build Status][ci-image]][ci-url]
[![Code quality][codeclimate-image]][codeclimate-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Opinionated set of eslint and prettier rules

# Installation

Notice that all the `@dreipol/pandora` peer dependencies should be installed manually. For this reason we need to explicitly define their major version.

```shell
# Install the linting tools
npm i -D eslint@8 prettier@2

# Install the plugins used in @dreipol/pandora
npm i -D eslint-config-airbnb-base@15 eslint-plugin-prettier@4 eslint-config-prettier@8 eslint-plugin-fp@2 eslint-plugin-import@2

# Install @dreipol/pandora
npm i -D @dreipol/pandora
```

For Typescript support

```shell
npm i -D typescript@4 @typescript-eslint/eslint-plugin@5 @typescript-eslint/parser@5
```

These plugins assume a `tsconfig.json` file in your project root ([Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)).

## Optional IDE Configuration

- Install eslint in [your IDE](https://eslint.org/docs/user-guide/integrations)
- Install prettier in [your IDE](https://prettier.io/docs/en/editors.html)

# Eslint Setup

Set up your eslint config (`.eslintrc.js`) file as follows to enable the `@dreipol/pandora` eslint rules in your project

```js
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [eslint.base],
}
```

To enable Typescript support, simply add the `eslint.typescript` settings to the extension list

```js
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [eslint.base, eslint.typescript],
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
npm i -D eslint-plugin-vue@8
```

## Eslint Setup

To enable the Vue.js linting you should add the following extension to your eslint config (`.eslintrc.js`) file:

```diff
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [eslint.base, eslint.vue],
}
```

If you need Typescript support in your Vue components, you can add the following ESLint plugin

```shell
npm i -D @vue/eslint-config-typescript@7
```

Now, enable Vue Typescript support in your eslint config

```diff
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [
    api.eslint.base,
    api.eslint.typescript,
    api.eslint.vue,
    api.eslint.vueTypescript,
  ]
}
```

## Prettier Setup

To let prettier format your Vue.js files you can simply setup your prettier config (`.prettierrc.js`) file as follows

```js
const { prettier } = require('@dreipol/pandora')

module.exports = prettier.vue
```

# React Setup

## Installation

For React projects we need to install the following two dependencies:

```shell
npm i -D eslint-plugin-react@7 eslint-plugin-react-hooks@4
```

## Eslint Setup

To enable linting for React/JSX files, you should add the following extension to your eslint config (`.eslintrc.js`) file:

```diff
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [eslint.base, eslint.react],
}
```

You don't need any specific plugins for Typescript support with React, just enable both configs in your `.eslintrc.js`.

```diff
const { eslint } = require('@dreipol/pandora')

module.exports = {
  extends: [eslint.base, eslint.react, eslint.typescript],
}
```

# Stylelint Setup

## Stylelint Installation

Make sure to have Stylelint installed in your project before proceeding with the following steps

```shell
npm i stylelint@14 stylelint-prettier@2 stylelint-config-prettier@9
```

### Stylelint Basic Rules Config

To use only the basic pandora stylelint rules in your project you can set up your `.stylelintrc.js` file as follows

```js
const { stylelint } = require('@dreipol/pandora')

module.exports = {
  extends: [stylelint.base],
}
```

### Stylelint SCSS Config

Does your project use SCSS files? No problems... you can enable the pandora stylelint rules for scss.
First you need to install the `stylelint-scss` dependency

```shell
npm i stylelint-scss@4 postcss-scss@4 postcss@8
```

You can then update your `.stylelintrc.js` file as follows

```diff
const { stylelint } = require('@dreipol/pandora')

module.exports = {
  extends: [
    stylelint.base,
+   stylelint.scss,
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
const { stylelint } = require('@dreipol/pandora')

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
+   stylelint.bemPattern,
  ],
}
```

### Stylelint Order Config

Do you care about the order of your css properties? In that case the pandora `stylelint/config-order` is what you are looking for.
First install `stylelint-order`

```shell
npm i stylelint-order@5
```

Then update your `.stylelintrc.js` file as follows

```diff
const { stylelint } = require('@dreipol/pandora')

module.exports = {
  extends: [
    stylelint.base,
    stylelint.scss,
    stylelint.bemPattern,
+   stylelint.order,
  ],
}
```

[ci-image]: https://img.shields.io/github/workflow/status/dreipol/pandora/test?style=flat-square&branch=main
[ci-url]: https://github.com/dreipol/pandora/actions
[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]: LICENSE
[npm-version-image]: http://img.shields.io/npm/v/@dreipol/pandora.svg?style=flat-square
[npm-downloads-image]: http://img.shields.io/npm/dm/@dreipol/pandora.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@dreipol/pandora
[codeclimate-image]: https://api.codeclimate.com/v1/badges/9b0baa585855a19c09a1/maintainability
[codeclimate-url]: https://codeclimate.com/github/dreipol/pandora/maintainability
