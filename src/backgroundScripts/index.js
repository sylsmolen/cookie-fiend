import '@babel/polyfill'
import { getActiveTabAsync } from '../shared/tabs'
import { composePromise } from '../utils'
console.log('hello from the barckround script')

var executeContentScript = tab =>
  browser.tabs.executeScript(tab.id, {
    file: '/content_scripts/index.js'
  })

const run = composePromise(executeContentScript, getActiveTabAsync)

const onTabUpdated = async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    console.log('url change', changeInfo.url)
    executeContentScript(tab)
  }
}

browser.tabs.onUpdated.addListener(onTabUpdated)

run()
