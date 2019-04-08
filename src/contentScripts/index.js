import '@babel/polyfill'
import {
  compose,
  composePromise,
  timeout,
  interval,
  reduceToNewArr,
  thunk,
  map,
  mapTo,
  logErr
} from '../utils'
import { getSyncStorageByUrlAsync } from '../shared/browserStorage'

const EVENTS = {
  CLICK: 'click',
  STYLE: 'style'
}

const EXECUTION_MODE = {
  ONCE: 'once',
  INTERVAL: 'interval',
  ON_LOAD: 'on load'
}

/* HELPERS */

const runAndResolve = func => resolve =>
  compose(
    resolve,
    func
  )

const createTimeoutCallback = (time, func) =>
  compose(
    timeout(time),
    runAndResolve(func)
  )

const createPromise = callback => new Promise(callback)

const createTimeoutPromise = compose(
  createPromise,
  createTimeoutCallback
)

const getTimeoutPromise = time => func => createTimeoutPromise(time, func)

const createOnLoadCallback = (elementToLoad, func) => resolve => {
  console.log('waiting for', elementToLoad)
  const intervalRef = setInterval(() => {
    if (document.querySelector(elementToLoad)) {
      console.log(elementToLoad, 'found')
      clearInterval(intervalRef)
      resolve()
      func()
    }
  }, 500)
}

const createOnLoadPromise = compose(
  createPromise,
  createOnLoadCallback
)

const getOnLoadPromise = elementToLoad => func =>
  createOnLoadPromise(elementToLoad, func)

/* EVENT HANDLERS */

const selectElement = eventObj => {
  const element = document.querySelector(eventObj.selector)
  if (element) {
    console.log('selected', eventObj.name)
    eventObj.selectedElement = element
    return eventObj
  }
  console.log('select failed', eventObj.name)
  return eventObj
}

const click = eventObj => {
  if (eventObj.selectedElement) {
    eventObj.selectedElement.click()
    console.log('clicked', eventObj.name)
    return eventObj
  }
  console.log('click failed', eventObj.name)
  return eventObj
}

const style = eventObj => {
  if (eventObj.selectedElement) {
    Object.keys(eventObj.value).forEach(cssProp => {
      eventObj.selectedElement.style[cssProp] = eventObj.value[cssProp]
    })

    console.log('style', eventObj.name)
    return eventObj
  }
  console.log('style failed', eventObj.name)
  return eventObj
}

const getEventHandler = eventObj => {
  switch (eventObj.event) {
    case EVENTS.CLICK: {
      return click(eventObj)
    }

    case EVENTS.STYLE: {
      return style(eventObj)
    }

    default: {
      return eventObj
    }
  }
}

/* EVENT LIST */

const sortByPosition = (curr, prev) => curr.position - prev.position
const sortEvents = data => data.sort(sortByPosition)

const addNewPosition = (currEvent, position, result = []) => {
  // const eventCopy = copy(currEvent); // copy won't work, WTF!?
  const eventCopy = JSON.parse(JSON.stringify(currEvent))

  if (position > 0) {
    eventCopy.position = +(eventCopy.position + '.' + position)
    result.push(eventCopy)
    return addNewPosition(currEvent, position - 1, result)
  } else {
    result.push(eventCopy)
  }

  return result
}

const createEventsToRepeat = (eventAcc, currEvent) => {
  if (currEvent.repeat > 0) {
    const repeatedEvent = addNewPosition(currEvent, currEvent.repeat)
    eventAcc.push(...repeatedEvent)
  } else {
    eventAcc.push(currEvent)
  }

  return eventAcc
}

const addRepeatedEvents = reduceToNewArr(createEventsToRepeat)

const handleEvent = compose(
  getEventHandler,
  selectElement
)

const delayedEvent = thunk(handleEvent)

const getExecutionMode = eventObj => {
  const timeoutTrigger = compose(
    getTimeoutPromise(eventObj.timeout),
    delayedEvent
  )

  const intervalTrigger = compose(
    interval(eventObj.modeParam),
    delayedEvent
  )

  const onLoadTrigger = compose(
    getOnLoadPromise(eventObj.modeParam),
    delayedEvent
  )

  switch (eventObj.mode) {
    case EXECUTION_MODE.ONCE: {
      eventObj.trigger = thunk(timeoutTrigger)(eventObj)
      return eventObj
    }

    case EXECUTION_MODE.INTERVAL: {
      eventObj.trigger = thunk(intervalTrigger)(eventObj)
      return eventObj
    }

    case EXECUTION_MODE.ON_LOAD: {
      eventObj.trigger = thunk(onLoadTrigger)(eventObj)
      return eventObj
    }

    default:
      return eventObj
  }
}

const createEventList = map(getExecutionMode)

/* MAIN */

const getEvents = compose(
  createEventList,
  sortEvents,
  addRepeatedEvents
)

const mapToTriggerList = mapTo('trigger')

const getEventQueue = compose(
  mapToTriggerList,
  getEvents
)

const reduceAsync = eventQueue =>
  eventQueue.reduce(async (promise, eventPromise) => {
    await promise
    await eventPromise()
  }, Promise.resolve())

export const runEventQueue = async data => {
  const awaitedData = await data
  return compose(
    reduceAsync,
    getEventQueue
  )(awaitedData)
}

const hi = async () => {
  console.log('COOKIE_FIEND contents script')
  console.log(window.location.href)
  const res = await getSyncStorageByUrlAsync(window.location.href)
  console.log(res)
  console.log(JSON.stringify(res))
  runEventQueue(res)
}

hi()
