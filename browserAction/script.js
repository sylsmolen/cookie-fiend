const COOKIE_FIEND = "COOKIE_FIEND";
const setlocalStorageBtn = document.querySelector("#setLocalStorageBtn");
const getlocalStorageBtn = document.querySelector("#getLocalStorageBtn");

const setItem = () => {
  console.log("sync storage item set");
};

const getItem = storageItem => {
  console.log("storage item: ", JSON.stringify(storageItem));
};

const onSetStorageError = err => {
  console.log("set sync storage error", err);
};

const onGetStorageError = err => {
  console.log("get sync storage error", err);
};

const setSyncStorage = value => {
  browser.storage.sync
    .set({ [COOKIE_FIEND]: value })
    .then(setItem, onSetStorageError);
};

const getSyncStorage = value => {
  browser.storage.sync.get("COOKIE_FIEND").then(getItem, onGetStorageError);
};

const setLSBtnClikced = e => {
  const textField = document.querySelector("#lsTxtArea");

  if (textField.value) {
    console.log(textField.value);
    setSyncStorage(textField.value);
  }

  console.log("clicked");
};
setlocalStorageBtn.addEventListener("click", setLSBtnClikced);
getlocalStorageBtn.addEventListener("click", getSyncStorage);
