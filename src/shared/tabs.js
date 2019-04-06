import { logErr, head } from '../utils'

const activeTabQuery = window.browser.tabs.query({
  currentWindow: true,
  active: true
})

export const getActiveTabUrlAsync = async () => {
  const result = await activeTabQuery.then(
    head,
    logErr("couldn't get active tab")
  )

  if (result && result.hasOwnProperty('url')) {
    return result.url
  }
  return result
}
