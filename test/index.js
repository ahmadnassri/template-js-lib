import { Lib } from '../src/index.js' // eslint-disable-line import/no-named-default
import { test } from 'tap'

test('example', assert => {
  assert.plan(2)
  assert.type(Lib, Function)
  assert.ok(Lib(), 'hello world')
})
