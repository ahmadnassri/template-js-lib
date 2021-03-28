import { Lib } from '..' // eslint-disable-line import/no-named-default
import { test } from 'tap'

test('example', assert => {
  assert.plan(2)
  assert.type(Lib, Function)
  assert.true(Lib(), 'hello world')
})
