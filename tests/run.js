const test = require('tape')
const fs = require('fs').promises
const { ESLint } = require('eslint')
const prettier = require('prettier')

const api = require('../index')

const isLintResultValid = ({ errorCount, warningCount }) =>
  errorCount === 0 && warningCount === 0

const areAllLintResultsValid = (result) => {
  return result.every(isLintResultValid)
}

test('Self-test', async (assert) => {
  const eslint = new ESLint({
    baseConfig: {
      extends: [api.eslint.base],
      ignorePatterns: ['!.prettierrc.js'],
    },
  })
  const result = await eslint.lintFiles([
    '.eslintrc.js',
    '.prettierrc.js',
    'index.js',
    'tests/run.js',
  ])
  assert.true(
    areAllLintResultsValid(result),
    'Base config files and exports validate against the base ESLint config.',
  )
  assert.end()
})

test('ESLint JS config', async (assert) => {
  const eslintVue = new ESLint({
    baseConfig: {
      extends: [api.eslint.base, api.eslint.vue],
    },
  })
  const [validResult, invalidResult] = await eslintVue.lintFiles([
    'tests/fixtures/valid.js',
    'tests/fixtures/invalid.js',
  ])

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates js files against the config.',
  )
  assert.end()
})

test('ESLint Vue config', async (assert) => {
  const eslintVue = new ESLint({
    baseConfig: {
      extends: [api.eslint.base, api.eslint.vue],
    },
  })
  const [validResult, invalidResult] = await eslintVue.lintFiles([
    'tests/fixtures/valid.vue',
    'tests/fixtures/invalid.vue',
  ])

  assert.deepEqual(
    [isLintResultValid(validResult), isLintResultValid(invalidResult)],
    [true, false],
    'Validates vue components against the config.',
  )
  assert.end()
})

test('Prettier JS config', async (assert) => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/valid.js',
  }
  const [rawValidJS, rawInvalidJS] = await Promise.all([
    fs.readFile('tests/fixtures/valid.js'),
    fs.readFile('tests/fixtures/invalid.js'),
  ])

  const prettierOkOnValidJS = prettier.check(rawValidJS.toString(), config)
  const prettierOkOnInvalidJS = prettier.check(rawInvalidJS.toString(), config)
  assert.deepEqual(
    [prettierOkOnValidJS, prettierOkOnInvalidJS],
    [true, false],
    'Detects unformatted JS files.',
  )
  assert.end()
})

test('Prettier Vue config', async (assert) => {
  const config = {
    ...api.prettier.base,
    filepath: 'test/fixtures/valid.vue',
  }
  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/valid.vue'),
    fs.readFile('tests/fixtures/invalid.vue'),
  ])

  const prettierOkOnValidVue = prettier.check(rawValidVue.toString(), config)
  const prettierOkOnInvalidVue = prettier.check(
    rawInvalidVue.toString(),
    config,
  )
  assert.deepEqual(
    [prettierOkOnValidVue, prettierOkOnInvalidVue],
    [true, false],
    'Detects unformatted vue components.',
  )
  assert.end()
})
