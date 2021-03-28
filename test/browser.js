import { test, beforeEach, afterEach } from 'tap'
import { join } from 'path'
import * as browsers from 'playwright'

let browser, page

beforeEach(async done => {
  browser = await browsers[process.env.BROWSER].launch()
  page = await browser.newPage()

  await page.goto(`file://${join(__dirname, 'index.html')}`)
  await page.addScriptTag({
    path: join(__dirname, '../dist/index.umd.js')
  })

  done()
})

afterEach(async done => {
  await browser.close()
  done()
})

test('simple test', { skip: !process.env.BROWSER }, async assert => {
  assert.plan(1)

  // run in the browser
  const result = await page.evaluate(() => {
    const { Lib } = window.TemplateLib
    return Lib()
  })

  assert.equal(result, 'hello world')
})
