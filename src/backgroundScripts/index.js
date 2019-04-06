import '@babel/polyfill'
import { getActiveTabUrlAsync } from '../shared/tabs'
console.log('hello from the barckround script')

function sendMessageToTabs (tabs) {
  for (let tab of tabs) {
    browser.tabs
      .sendMessage(tab.id, { greeting: 'Hi from background script' })
      .then(response => {
        console.log('Message from the content script:')
        console.log(response.response)
      })
      .catch(err => console.log(err))
  }
}

const sendMessage = async () => {
  const tabUrl = await getActiveTabUrlAsync()
  console.log(tabUrl)
}

sendMessage()
