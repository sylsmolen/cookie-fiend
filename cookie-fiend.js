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

const data = [
  {
    position: 0,
    repeat: 0,
    event: "style",
    name: "white header",
    selector: ".widget-header__wrapper",
    timeout: 1000,
    mode: "once",
    value: {
      "background-color": "white"
    },
    selectedElement: null,
    trigger: null
  },
  {
    position: 0.1,
    repeat: 0,
    event: "click",
    name: "open settings",
    selector: "#qc-cmp-purpose-button",
    timeout: 900,
    mode: "once",
    value: null,
    selectedElement: null,
    trigger: null
  },
  {
    position: 1,
    repeat: 0,
    event: "click",
    name: "reject storage access",
    selector:
      "table.qc-cmp-table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > span:nth-child(1)",
    timeout: 1300,
    mode: EXECUTION_MODE.INTERVAL,
    value: 1000,
    selectedElement: null,
    trigger: null
  }
  // {
  //   position: 1,
  //   repeat: 0,
  //   event: "click",
  //   name: "reject cookies",
  //   selector: "button.qc-cmp-button:nth-child(1)",
  //   timeout: 0,
  //   mode: "once",
  //   value: null,
  //   selectedElement: null,
  //   trigger: null
  // },
  // {
  //   position: 2,
  //   repeat: 0,
  //   event: "click",
  //   name: "save",
  //   selector: ".qc-cmp-save-and-exit",
  //   timeout: 0,
  //   mode: "once",
  //   value: null,
  //   selectedElement: null,
  //   trigger: null
  // }
];

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

const promiseCallback = (time, func) => resolve => {
  setTimeout(() => {
    console.log(time);
    console.log("yo");
    func();
    resolve();
  }, time);
};

const timeoutPromise = time => func => new Promise(promiseCallback(time, func));

const interval = time => func => setInterval(func, time);
const thunk = func => data => () => func(data);

const run = func => func();
const runAsync = async func => await func();
const runEachAsync = forEach(runAsync);
const getTail = arr => arr[arr.length - 1];
const copy = compose(
  JSON.parse,
  JSON.stringify
);

/* EVENT HANDLERS */

const selectElement = eventObj => {
  const element = $(eventObj.selector);
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
    timeoutPromise(eventObj.timeout),
    delayedEvent
  );

  const intervalTrigger = compose(
    interval(eventObj.value),
    delayedEvent
  );

  if (eventObj.mode === EXECUTION_MODE.ONCE) {
    eventObj.trigger = thunk(timeoutTrigger)(eventObj);
  } else if (eventObj.mode === EXECUTION_MODE.INTERVAL) {
    eventObj.trigger = thunk(intervalTrigger)(eventObj);
  }
  return eventObj;
};

const createEventList = map(getExecutionMode);

/* LOCAL STORAGE */

const setLocalStorage = data =>
  window.localStorage.setItem(COOKIE_FIEND, JSON.stringify(data));

const readLocalStorage = () =>
  JSON.parse(window.localStorage.getItem(COOKIE_FIEND));

/* MAIN */

const getEvents = compose(
  createEventList,
  sortEvents,
  addRepeatedEvents
);

const storedData = readLocalStorage();

const mapToTriggerList = mapTo("trigger");

const getEventQueue = compose(
  mapToTriggerList,
  getEvents
);

const reduceAsync = async eventQueue => {
  await eventQueue.reduce(async (promise, eventPromise) => {
    await promise;
    await eventPromise();
  }, Promise.resolve());
};

const runEventQueue = compose(
  reduceAsync,
  getEventQueue
);

const getData = () => storedData || data;

const runCookieFiend = compose(
  runEventQueue,
  getData
);

const eventQueue = getEventQueue(data);
runCookieFiend();
