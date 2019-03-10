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
    event: "click",
    name: "open settings",
    selector: "#qc-cmp-purpose-button",
    timeout: 500,
    mode: EXECUTION_MODE.ONCE,
    value: null
  },
  {
    position: 1,
    repeat: 0,
    event: "click",
    name: "reject cookies",
    selector: "button.qc-cmp-button:nth-child(1)",
    timeout: 0,
    mode: EXECUTION_MODE.ONCE,
    value: null
  },
  {
    position: 2,
    repeat: 0,
    event: "click",
    name: "save",
    selector: ".qc-cmp-save-and-exit",
    timeout: 0,
    mode: EXECUTION_MODE.ONCE,
    value: null
  }
];

/* HELPERS */

const log = el => (console.log(el), el);
const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];

const map = func => data => data.map(func);
const forEach = func => data => data.forEach(func);
const reduceToNewArr = func => data => data.reduce(func, []);

const timeout = time => func => setTimeout(func, time);
const interval = time => func => setInterval(func, time);
const thunk = func => data => () => func(data);
const applyArg = data => func => func(data);

const run = func => func();
const runEach = forEach(run);
const getTail = arr => arr[arr.length - 1];
const copy = compose(
  JSON.parse,
  JSON.stringify
);

/* EVENT HANDLERS */

const selectElement = name => selector => {
  const element = $(selector);
  if (element) {
    console.log("selected", name);
    return element;
  }
  console.log("select failed", name);
  return null;
};

const click = element => name => {
  if (element) {
    element.click();
    console.log("clicked", name);
    return true;
  }
  console.log("click failed", name);
  return false;
};

const getEventHandler = eventType => element => {
  switch (eventType) {
    case EVENTS.CLICK: {
      return click(element);
    }

    default: {
      return null;
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

const createEvent = eventObj =>
  compose(
    applyArg(eventObj.name),
    getEventHandler(eventObj.event),
    selectElement(eventObj.name)
  )(eventObj.selector);

const createEventThunk = thunk(createEvent);

const getExecutionMode = event => func => {
  if (event.mode === EXECUTION_MODE.ONCE) {
    console.log(event.name);
    console.log(event.timeout);
    return timeout(event.timeout)(func);
  } else if (event.mode === EXECUTION_MODE.INTERVAL) {
    return interval(event.value)(func);
  }
  return timeout(event.timeout)(func);
};

const applyExecutionMode = event =>
  compose(
    getExecutionMode(event),
    createEventThunk
  )(event);

const delayEvent = thunk(applyExecutionMode);
const createEventList = map(delayEvent);

const aggregateTimeout = (eventAcc, currEvent) => {
  const lastEl = getTail(eventAcc);
  currEvent.timeout += lastEl ? lastEl.timeout : 0;

  eventAcc.push(currEvent);
  return eventAcc;
};

const calcTimeout = reduceToNewArr(aggregateTimeout);

/* LOCAL STORAGE */

const setLocalStorage = data =>
  window.localStorage.setItem(COOKIE_FIEND, JSON.stringify(data));

const readLocalStorage = () =>
  JSON.parse(window.localStorage.getItem(COOKIE_FIEND));

/* MAIN */

const events = compose(
  createEventList,
  calcTimeout,
  sortEvents,
  addRepeatedEvents
);

const storedData = readLocalStorage();

if (storedData) {
  const eventQueue = events(storedData);
  console.log(eventQueue);
  runEach(eventQueue);
} else if (data) {
  const eventQueue = events(data);
  console.log(eventQueue);
  runEach(eventQueue);
}
