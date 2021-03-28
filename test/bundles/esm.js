import { test } from 'tap'

import Bundle from '../..'

test('default import', assert => {
  assert.plan(2)

  assert.type(Bundle, Object)
  assert.match(Bundle, {
    Lib: Function
  })
})
