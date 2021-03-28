import tap from 'tap'
import { join } from 'path'
import * as browsers from 'playwright'

let browser, page

tap.beforeEach(async done => {
  browser = await browsers[process.env.BROWSER || 'chromium'].launch()
  page = await browser.newPage()

  await page.goto(`file://${join(__dirname, 'index.html')}`)
  await page.addScriptTag({
    path: join(__dirname, '../dist/index.umd.js')
  })

  done()
})

tap.afterEach(async done => {
  await browser.close()
  done()
})

tap.test('simple test', async assert => {
  assert.plan(1)

  // run in the browser
  const result = await page.evaluate(() => {
    const { Lib } = window.TemplateLib
    return Lib()
  })

  assert.equal(result, 'hello world')
})
