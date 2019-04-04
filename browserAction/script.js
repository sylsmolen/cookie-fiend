const COOKIE_FIEND = "COOKIE_FIEND";

const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];
const logErr = txt => err => console.error(txt, err);
const head = arr => arr[0];
const getProp = prop => obj => obj[prop];
const thunk = func => data => () => func(data);

const inspect = value => {
  console.log(value);
  return value;
};

const unary = fn => arg => fn(arg);
const parseTwice = compose(
  JSON.parse,
  JSON.parse
);

/* BROWSER STORAGE */

const getStorageItemName = domain => `${COOKIE_FIEND}::${domain}`;

const getItem = key => async storageItem => {
  try {
    const eventConfig = parseTwice(storageItem[key]);
    console.log("eventConfig", eventConfig);
  } catch (err) {
    logErr("get item failed")(err);
  }
};

const setSyncStorage = valueThunk => async key => {
  const unpacked = valueThunk();

  console.log(unpacked);
  const res = await browser.storage.sync
    .set({
      [key]: unpacked
    })
    .then(inspect, logErr("set storage failed"));
  console.log("res", res);
  console.log("key", key);

  return res;
};

const getSyncStorage = key =>
  browser.storage.sync.get(key).then(getItem(key), logErr("getSyncStorage"));

const getTextAreaFieldValue = () => {
  const textField = document.querySelector("#lsTxtArea");
  console.log(textField);
  if (textField.value) {
    return textField.value;
  }
  return "";
};

const getUserInputAndSaveToStorage = setSyncStorage(getTextAreaFieldValue);

const activeTabQuery = window.browser.tabs.query({
  currentWindow: true,
  active: true
});

const getActiveTabUrl = async () => {
  const result = await activeTabQuery.then(
    head,
    logErr("couldn't get active tab")
  );

  if (result && result.hasOwnProperty("url")) {
    return result.url;
  }
  return result;
};

const createLinkElement = window.document.createElement("a");

const setAttribute = attr => element => value => {
  element.setAttribute(attr, value);
  return element;
};

const setHref = setAttribute("href");

const setHrefOnLink = setHref(createLinkElement);

const getDomainFromUrl = compose(
  getProp("hostname"),
  setHrefOnLink
);

const setConfigForCurrentDomain = async () => {
  const tabUrl = await getActiveTabUrl();
  compose(
    getUserInputAndSaveToStorage,
    getStorageItemName,
    getDomainFromUrl
  )(tabUrl);
};
const getConfigForCurrentDomain = async () => {
  const tabUrl = await getActiveTabUrl();
  compose(
    getSyncStorage,
    getStorageItemName,
    getDomainFromUrl
  )(tabUrl);
};

/* EVENTS */

const setlocalStorageBtn = document.querySelector("#setLocalStorageBtn");
const getlocalStorageBtn = document.querySelector("#getLocalStorageBtn");

setlocalStorageBtn.addEventListener("click", setConfigForCurrentDomain);
getlocalStorageBtn.addEventListener("click", getConfigForCurrentDomain);
