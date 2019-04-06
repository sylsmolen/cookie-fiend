import { COOKIE_FIEND } from '../data/constants'
import { log, logErr, getProp, head, compose, composePromise } from '../utils'

const getStorageItemName = domain => `${COOKIE_FIEND}::${domain}`
const createLinkElement = window.document.createElement('a')
const parseTwice = compose(
  JSON.parse,
  JSON.parse
)

const setAttribute = attr => element => value => {
  element.setAttribute(attr, value)
  return element
}

const setHref = setAttribute('href')
const setHrefOnLink = setHref(createLinkElement)

const getDomainFromUrl = compose(
  getProp('hostname'),
  setHrefOnLink
)

const getItem = key => async storageItem => {
  try {
    const eventConfig = parseTwice(storageItem[key])
    console.log('eventConfig', eventConfig)
  } catch (err) {
    console.log('raw result:', storageItem[key])
    logErr('get item failed')(err)
  }
}

const activeTabQuery = window.browser.tabs.query({
  currentWindow: true,
  active: true
})

const getActiveTabUrlAsync = async () => {
  const result = await activeTabQuery.then(
    head,
    logErr("couldn't get active tab")
  )

  if (result && result.hasOwnProperty('url')) {
    return result.url
  }
  return result
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

export const getStorageKeyAsync = composePromise(
  getStorageItemName,
  getDomainFromUrl,
  getActiveTabUrlAsync
)
