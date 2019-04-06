import '@babel/polyfill'
import { composePromise } from '../utils'
import {
  setSyncStorageAsync,
  getSyncStorageAsync,
  getStorageKeyAsync
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
  getStorageKeyAsync
)

const getConfigForCurrentDomain = composePromise(
  getSyncStorageAsync,
  getStorageKeyAsync
)

/* EVENTS */

const setlocalStorageBtn = document.querySelector('#setLocalStorageBtn')
const getlocalStorageBtn = document.querySelector('#getLocalStorageBtn')

setlocalStorageBtn.addEventListener('click', setConfigForCurrentDomain)
getlocalStorageBtn.addEventListener('click', getConfigForCurrentDomain)
