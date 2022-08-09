import { test } from 'tap'

import { Lib } from '../../dist/index.mjs'

test('default import', assert => {
  assert.plan(1)

  assert.type(Lib, Function)
})
