import { logErr, head, getProp, composePromise } from '../utils'

const activeTabQuery = window.browser.tabs.query({
  currentWindow: true,
  active: true
})

export const getActiveTabAsync = async () =>
  activeTabQuery.then(head, logErr("couldn't get active tab"))

export const getActiveTabUrlAsync = composePromise(
  getProp('url'),
  getActiveTabAsync
)
