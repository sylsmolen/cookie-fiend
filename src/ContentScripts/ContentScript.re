open Utils;
open Event;

Js.log("Yo")
Js.log(windowLocation)

let onGetStorageItemSuccess = (events: eventMap) => {
  let firstEvent = IntMap.find(0, events)
  Js.log(firstEvent.name)
}

let onGetStorageItemError = (e) => Js.log(e)

Storage.get(windowLocation, onGetStorageItemSuccess, onGetStorageItemError)
