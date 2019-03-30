console.log("COOKIE_FIEND");

const COOKIE_FIEND = "COOKIE_FIEND";

const EVENTS = {
  CLICK: "click",
  STYLE: "style"
};

const EXECUTION_MODE = {
  ONCE: "once",
  INTERVAL: "interval",
  ON_LOAD: "on load"
};

const data = [];
// const data = [
//   {
//     position: 0,
//     repeat: 0,
//     event: "style",
//     name: "cookie info box",
//     selector: ".qc-cmp-initial-info",
//     timeout: 0,
//     mode: "on load",
//     modeParam: ".qc-cmp-initial-info",
//     value: {
//       "background-color": "red"
//     },
//     selectedElement: null,
//     trigger: null
//   },
// {
//   position: 0,
//   repeat: 0,
//   event: "style",
//   name: "white header",
//   selector: ".widget-header__wrapper",
//   timeout: 1200,
//   mode: "once",
//   value: {
//     "background-color": "white"
//   },
//   selectedElement: null,
//   trigger: null
// }
//   {
//     position: 0.05,
//     repeat: 0,
//     event: "eval",
//     name: "append blue square",
//     selector: "body",
//     timeout: 0,
//     mode: "interval",
//     modeParam: 1000,
//     value: `const el = $('#qcCmpUi')
// const square = document.createElement("div")
// square.classList.add('test-square')
// const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
// square.style.width = '50px'
// square.style.height = '50px'
// square.style['background-color'] = color;
// el.appendChild(square)`,
//     selectedElement: null,
//     trigger: null
//   }
// {
//   position: 2,
//   repeat: 0,
//   event: "style",
//   name: "3 square red",
//   selector: "div.test-square:nth-child(7)",
//   timeout: 0,
//   mode: "on load",
//   modeParam: "div.test-square:nth-child(7)",
//   value: {
//     "background-color": "red"
//   },
//   selectedElement: null,
//   trigger: null
// }

// {
//   position: 0.1,
//   repeat: 0,
//   event: "click",
//   name: "open settings",
//   selector: "#qc-cmp-purpose-button",
//   timeout: 0,
//   mode: "once",
//   value: null,
//   selectedElement: null,
//   trigger: null
// },
// {
//   position: 1,
//   repeat: 0,
//   event: "click",
//   name: "reject storage access",
//   selector:
//     "table.qc-cmp-table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)",
//   timeout: 1300,
//   mode: EXECUTION_MODE.INTERVAL,
//   modeParam: 1000
//   value: null,
//   selectedElement: null,
//   trigger: null
// }
//   {
//     position: 1,
//     repeat: 0,
//     event: "click",
//     name: "reject cookies",
//     selector: "button.qc-cmp-button:nth-child(1)",
//     timeout: 0,
//     mode: "once",
//     value: null,
//     selectedElement: null,
//     trigger: null
//   },
//   {
//     position: 2,
//     repeat: 0,
//     event: "click",
//     name: "save",
//     selector: ".qc-cmp-save-and-exit",
//     timeout: 0,
//     mode: "once",
//     modeParam: "",
//     value: null,
//     selectedElement: null,
//     trigger: null
//   }
// ];

/* HELPERS */

const log = el => (console.log(el), el);
const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const getProp = prop => obj => obj[prop];
const map = func => data => data.map(func);
const mapTo = compose(
  map,
  getProp
);
const forEach = func => data => data.forEach(func);
const reduceToNewArr = func => data => data.reduce(func, []);
const timeout = time => func => setTimeout(func, time);
const interval = time => func => setInterval(func, time);
const thunk = func => data => () => func(data);

const runAndResolve = func => resolve =>
  compose(
    resolve,
    func
  );

const createTimeoutCallback = (time, func) =>
  compose(
    timeout(time),
    runAndResolve(func)
  );

const createPromise = callback => new Promise(callback);

const createTimeoutPromise = compose(
  createPromise,
  createTimeoutCallback
);

const getTimeoutPromise = time => func => createTimeoutPromise(time, func);

const createOnLoadCallback = (elementToLoad, func) => resolve => {
  console.log("waiting for", elementToLoad);
  const intervalRef = setInterval(() => {
    if (document.querySelector(elementToLoad)) {
      console.log(elementToLoad, "found");
      clearInterval(intervalRef);
      resolve();
      func();
    }
  }, 500);
};

const createOnLoadPromise = compose(
  createPromise,
  createOnLoadCallback
);

const getOnLoadPromise = elementToLoad => func =>
  createOnLoadPromise(elementToLoad, func);

const getTail = arr => arr[arr.length - 1];
const copy = compose(
  JSON.parse,
  JSON.stringify
);

/* EVENT HANDLERS */

const selectElement = eventObj => {
  const element = document.querySelector(eventObj.selector);
  if (element) {
    console.log("selected", eventObj.name);
    eventObj.selectedElement = element;
    return eventObj;
  }
  console.log("select failed", eventObj.name);
  return eventObj;
};

const click = eventObj => {
  if (eventObj.selectedElement) {
    eventObj.selectedElement.click();
    console.log("clicked", eventObj.name);
    return eventObj;
  }
  console.log("click failed", eventObj.name);
  return eventObj;
};

const style = eventObj => {
  if (eventObj.selectedElement) {
    Object.keys(eventObj.value).forEach(cssProp => {
      eventObj.selectedElement.style[cssProp] = eventObj.value[cssProp];
    });

    console.log("style", eventObj.name);
    return eventObj;
  }
  console.log("style failed", eventObj.name);
  return eventObj;
};

const getEventHandler = eventObj => {
  switch (eventObj.event) {
    case EVENTS.CLICK: {
      return click(eventObj);
    }

    case EVENTS.STYLE: {
      return style(eventObj);
    }

    default: {
      return eventObj;
    }
  }
};

/* EVENT LIST */

const sortByPosition = (curr, prev) => curr.position - prev.position;
const sortEvents = data => data.sort(sortByPosition);

const addNewPosition = (currEvent, position, result = []) => {
  // const eventCopy = copy(currEvent); // copy won't work, WTF!?
  const eventCopy = JSON.parse(JSON.stringify(currEvent));

  if (position > 0) {
    eventCopy.position = +(eventCopy.position + "." + position);
    result.push(eventCopy);
    return addNewPosition(currEvent, position - 1, result);
  } else {
    result.push(eventCopy);
  }

  return result;
};

const createEventsToRepeat = (eventAcc, currEvent) => {
  if (currEvent.repeat > 0) {
    const repeatedEvent = addNewPosition(currEvent, currEvent.repeat);
    eventAcc.push(...repeatedEvent);
  } else {
    eventAcc.push(currEvent);
  }

  return eventAcc;
};

const addRepeatedEvents = reduceToNewArr(createEventsToRepeat);

const handleEvent = compose(
  getEventHandler,
  selectElement
);

const delayedEvent = thunk(handleEvent);

const getExecutionMode = eventObj => {
  const timeoutTrigger = compose(
    getTimeoutPromise(eventObj.timeout),
    delayedEvent
  );

  const intervalTrigger = compose(
    interval(eventObj.modeParam),
    delayedEvent
  );

  const onLoadTrigger = compose(
    getOnLoadPromise(eventObj.modeParam),
    delayedEvent
  );

  switch (eventObj.mode) {
    case EXECUTION_MODE.ONCE: {
      eventObj.trigger = thunk(timeoutTrigger)(eventObj);
      return eventObj;
    }

    case EXECUTION_MODE.INTERVAL: {
      eventObj.trigger = thunk(intervalTrigger)(eventObj);
      return eventObj;
    }

    case EXECUTION_MODE.ON_LOAD: {
      eventObj.trigger = thunk(onLoadTrigger)(eventObj);
      return eventObj;
    }

    default:
      return eventObj;
  }
};

const createEventList = map(getExecutionMode);

/* LOCAL STORAGE */

const readLocalStorageAsync = () =>
  browser.storage.sync.get("COOKIE_FIEND").then(getItem, onGetStorageError);

const getItem = storageItem => {
  try {
    const rawConfig = JSON.parse(storageItem[COOKIE_FIEND]);
    const eventConfig = JSON.parse(rawConfig);
    console.log("eventConfig loaded", eventConfig);
    return eventConfig;
  } catch (err) {
    console.error(err);
  }
};

const onGetStorageError = err => {
  console.log("get sync storage error", err);
};

/* MAIN */

const getEvents = compose(
  createEventList,
  sortEvents,
  addRepeatedEvents
);

const mapToTriggerList = mapTo("trigger");

const getEventQueue = compose(
  mapToTriggerList,
  getEvents
);

const reduceAsync = eventQueue =>
  eventQueue.reduce(async (promise, eventPromise) => {
    await promise;
    await eventPromise();
  }, Promise.resolve());

const runEventQueue = async data => {
  const awaitedData = await data;
  return compose(
    reduceAsync,
    getEventQueue
  )(awaitedData);
};

const runCookieFiend = compose(
  runEventQueue,
  readLocalStorageAsync
);

runCookieFiend();
