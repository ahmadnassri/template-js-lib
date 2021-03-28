const { test } = require('tap')
const { join } = require('path')

const Bundle = require('../..')

test('default import', assert => {
  assert.plan(3)

  const pathFound = require.resolve('../..')
  const pathExpected = join(__dirname, '../../dist/index.js')

  assert.equal(pathFound, pathExpected)
  assert.type(Bundle, Object)
  assert.match(Bundle, {
    Lib: Function
  })
})
