import '@babel/polyfill'
import { composePromise } from '../utils'
import {
  setSyncStorageAsync,
  getSyncStorageAsync,
  getStorageItemName
} from '../shared/browserStorage'
import { getActiveTabUrlAsync } from '../shared/tabs'

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

export const getStorageKeyFromTabAsync = composePromise(
  getStorageItemName,
  getActiveTabUrlAsync
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
