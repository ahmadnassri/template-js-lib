import { default as Lib } from '..' // eslint-disable-line import/no-named-default
import tap from 'tap'
import * as browsers from 'playwright'

let browser, page

tap.beforeEach(async done => {
  browser = await browsers[process.env.BROWSER || 'chromium'].launch()
  page = await browser.newPage()
  await page.exposeFunction('Lib', Lib)

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
    return window.Lib()
  })

  assert.equal(result, 'hello world')
})
