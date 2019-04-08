import { COOKIE_FIEND } from '../data/constants'
import { log, logErr, compose, composePromise } from '../utils'

export const getStorageItemName = domain => `${COOKIE_FIEND}::${domain}`
const parseTwice = compose(
  JSON.parse,
  JSON.parse
)

const getItem = key => async storageItem => {
  try {
    const eventConfig = parseTwice(storageItem[key])
    console.log('eventConfig loaded from browser storage', eventConfig)
    console.log(
      'eventConfig loaded from browser storage',
      JSON.stringify(eventConfig)
    )
    return eventConfig
  } catch (err) {
    console.log('raw result:', storageItem[key])
    logErr(`get item with key: ${key} failed`)(err)
  }
}

export const setSyncStorageAsync = valueThunk => async key => {
  const value = valueThunk()
  const res = await browser.storage.sync
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
  browser.storage.sync.get(key).then(getItem(key), logErr('getSyncStorage'))

export const getSyncStorageByUrlAsync = composePromise(
  getSyncStorageAsync,
  getStorageItemName
)
