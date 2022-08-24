import { test } from 'tap'
import { fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import * as browsers from 'playwright'

// esm workarounds
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let browser, page

const engines = [
  'chromium',
  'firefox',
  'webkit'
]

for (const engine of engines) {
  test(`test with ${engine}`, { skip: process.env.WITH_BROWSERS !== 'true' }, async assert => {
    browser = await browsers[engine].launch()
    page = await browser.newPage()

    await page.goto(`file://${join(__dirname, 'fixtures/index.html')}`)
    await page.addScriptTag({
      path: join(__dirname, '../dist/index.umd.js')
    })

    assert.plan(1)

    // run in the browser
    const result = await page.evaluate(() => {
      const { Lib } = window.TemplateLib
      return Lib()
    })

    assert.equal(result, 'hello world')

    await browser.close()
  })
}
