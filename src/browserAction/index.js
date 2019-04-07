import '@babel/polyfill'
import { composePromise } from '../utils'
import {
  setSyncStorageAsync,
  getSyncStorageAsync,
  getStorageKeyFromTabAsync
} from '../shared/browserStorage'

const getTextAreaFieldValue = () => {
  const textField = document.querySelector('#lsTxtArea')
  if (textField.value) {
    return textField.value
  }
  return ''
}

const getUserInputAndSaveToStorageAsync = setSyncStorageAsync(
  getTextAreaFieldValue
)

const setConfigForCurrentDomain = composePromise(
  getUserInputAndSaveToStorageAsync,
  getStorageKeyFromTabAsync
)

const getConfigForCurrentDomain = composePromise(
  getSyncStorageAsync,
  getStorageKeyFromTabAsync
)

/* EVENTS */

const setlocalStorageBtn = document.querySelector('#setLocalStorageBtn')
const getlocalStorageBtn = document.querySelector('#getLocalStorageBtn')

setlocalStorageBtn.addEventListener('click', setConfigForCurrentDomain)
getlocalStorageBtn.addEventListener('click', getConfigForCurrentDomain)
