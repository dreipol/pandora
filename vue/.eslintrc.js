module.exports = {
  extends: ['plugin:vue/recommended', 'prettier/vue'],
  rules: {
    'vue/attributes-order': [
      'error',
      {
        order: [
          'OTHER_ATTR',
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'OTHER_DIRECTIVES',
          'GLOBAL',
          'UNIQUE',
          'BINDING',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'warn',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: true,
        },
      },
    ],
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          'delimiters',
          'comments',
          'components',
          'directives',
          'filters',
          'extends',
          'mixins',
          'inheritAttrs',
          'provide',
          'inject',
          'model',
          'props',
          'propsData',
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          'events',
          'template',
          'render',
          'renderError',
        ],
      },
    ],
  },
}
