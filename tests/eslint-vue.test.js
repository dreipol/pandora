const test = require('tape')
const { ESLint } = require('eslint')

const api = require('../index')

const isLintResultValid = ({ errorCount, warningCount }) =>
  errorCount === 0 && warningCount === 0

test('ESLint Vue config', async (assert) => {
  const eslintVue = new ESLint({
    ignore: false,
    overrideConfig: {
      extends: [api.eslint.base, api.eslint.vue],
      rules: {
        'prettier/prettier': ['error', api.prettier.vue],
      },
    },
  })

  const [validResult, invalidResult] = await eslintVue.lintFiles([
    'tests/fixtures/vue-valid.vue',
    'tests/fixtures/vue-invalid.vue',
  ])

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates vue components against the config.',
  )
  assert.end()
})
