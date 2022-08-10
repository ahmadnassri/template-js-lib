import tap from 'tap'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import * as browsers from 'playwright'

// esm workarounds
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let browser, page

// exit early
if (['', 'no-browser', undefined].includes(process.env.BROWSER)) process.exit(0)

console.log(process.env.BROWSER)

tap.beforeEach(async () => {
  browser = await browsers[process.env.BROWSER].launch()
  page = await browser.newPage()

  await page.goto(`file://${join(__dirname, 'index.html')}`)
  await page.addScriptTag({
    path: join(__dirname, '../dist/index.umd.js')
  })
})

tap.afterEach(() => browser.close())

tap.test('simple test', { skip: !process.env.BROWSER }, async assert => {
  assert.plan(1)

  // run in the browser
  const result = await page.evaluate(() => {
    const { Lib } = window.TemplateLib
    return Lib()
  })

  assert.equal(result, 'hello world')
})
