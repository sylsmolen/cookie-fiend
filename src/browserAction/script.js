import '@babel/polyfill'
console.log('yoyo')

const COOKIE_FIEND = 'COOKIE_FIEND'

const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn(...res)], args)[0]

const composePromise = (...functions) => initialValue =>
  functions.reduceRight(
    (sum, fn) => Promise.resolve(sum).then(fn),
    initialValue
  )

const log = (...args) => console.log(...args)
const logErr = txt => err => console.error(txt, err)
const head = arr => arr[0]
const getProp = prop => obj => obj[prop]
const thunk = func => data => () => func(data)

const inspect = value => {
  console.log(value)
  return value
}

const unary = fn => arg => fn(arg)
const parseTwice = compose(
  JSON.parse,
  JSON.parse
)

/* BROWSER STORAGE */

const getStorageItemName = domain => `${COOKIE_FIEND}::${domain}`

const getItem = key => async storageItem => {
  try {
    const eventConfig = parseTwice(storageItem[key])
    console.log('eventConfig', eventConfig)
  } catch (err) {
    console.log('raw result:', storageItem[key])
    logErr('get item failed')(err)
  }
}

const setSyncStorageAsync = valueThunk => async key => {
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

const getSyncStorageAsync = key =>
  window.browser.storage.sync
    .get(key)
    .then(getItem(key), logErr('getSyncStorage'))

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

const createLinkElement = window.document.createElement('a')

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

const getStorageKeyAsync = composePromise(
  getStorageItemName,
  getDomainFromUrl,
  getActiveTabUrlAsync
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
