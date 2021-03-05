const test = require('tape')
const fs = require('fs').promises
const prettier = require('prettier')

const api = require('../index')

test('Prettier Vue config', async (assert) => {
  const config = {
    ...api.prettier.vue,
    filepath: 'test/fixtures/valid.vue',
  }

  const [rawValidVue, rawInvalidVue] = await Promise.all([
    fs.readFile('tests/fixtures/vue-valid.vue'),
    fs.readFile('tests/fixtures/vue-invalid.vue'),
  ])

  const prettierOkOnValidVue = prettier.check(rawValidVue.toString(), config)
  const prettierOkOnInvalidVue = prettier.check(
    rawInvalidVue.toString(),
    config,
  )
  assert.deepEqual(
    [prettierOkOnValidVue, prettierOkOnInvalidVue],
    [true, false],
    'Detects unformatted Vue components.',
  )
  assert.end()
})
