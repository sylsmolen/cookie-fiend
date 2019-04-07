import { COOKIE_FIEND } from '../data/constants'
import { log, logErr, compose, composePromise } from '../utils'
import { getActiveTabUrlAsync } from './tabs'

const getStorageItemName = domain => `${COOKIE_FIEND}::${domain}`
const parseTwice = compose(
  JSON.parse,
  JSON.parse
)

const getItem = key => async storageItem => {
  try {
    const eventConfig = parseTwice(storageItem[key])
    console.log('eventConfig loaded from browser storage', eventConfig)
    return eventConfig
  } catch (err) {
    console.log('raw result:', storageItem[key])
    logErr('get item failed')(err)
  }
}

export const setSyncStorageAsync = valueThunk => async key => {
  const value = valueThunk()
  const res = await window.browser.storage.sync
    .set({
      [key]: value
    })
    .then(
      log('storage saved', 'key', key, 'value', value),
      logErr('set storage failed')
    )
  return res
}

export const getSyncStorageAsync = key =>
  window.browser.storage.sync
    .get(key)
    .then(getItem(key), logErr('getSyncStorage'))

export const getStorageKeyFromTabAsync = composePromise(
  getStorageItemName,
  getActiveTabUrlAsync
)

export const getSyncStorageByUrlAsync = composePromise(
  getSyncStorageAsync,
  getStorageItemName
)
