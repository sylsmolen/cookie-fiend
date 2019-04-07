import '@babel/polyfill'
import { getActiveTabAsync } from '../shared/tabs'
import { getSyncStorageByUrlAsync } from '../shared/browserStorage'
import { getProp, composePromise } from '../utils'
console.log('hello from the barckround script')

const getConfigFromStorage = composePromise(
  getSyncStorageByUrlAsync,
  getProp('url')
)

const sendMessageToTabAsync = async tab => {
  console.log(tab)
  const config = await getConfigFromStorage(tab)

  console.log('config', config)
  return window.browser.tabs
    .sendMessage(tab.id, config)
    .catch(err => console.error(err))
}

const onTabUpdated = async (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    console.log('url change', changeInfo.url)
    const res = await sendMessageToTabAsync(tab)
    console.log('message res', res)
  }
}

browser.tabs.onUpdated.addListener(onTabUpdated)

// on load
composePromise(sendMessageToTabAsync, getActiveTabAsync)()
