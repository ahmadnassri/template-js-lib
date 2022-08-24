import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

// esm workarounds
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// old school
const { test } = require('tap')

const Bundle = require('../../dist/index.cjs')

test('default import', assert => {
  assert.plan(3)

  const pathFound = require.resolve('../..')
  const pathExpected = join(__dirname, '../../dist/index.cjs')

  assert.equal(pathFound, pathExpected)
  assert.type(Bundle, Object)
  assert.match(Bundle, {
    Lib: Function
  })
})
