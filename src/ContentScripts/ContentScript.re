open Utils;

Js.log("Yo from content script")
Js.log(windowLocation)

let onGetStorageItemSuccess = (item: string) => Js.log(item)

let onGetStorageItemError = (e) => Js.log(e)

Storage.get(windowLocation, onGetStorageItemSuccess, onGetStorageItemError)
