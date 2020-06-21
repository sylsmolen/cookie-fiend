open Event;

exception Reject(Js.Promise.error);

[@bs.deriving abstract]
type storageItem = {key: string};

[@bs.val] external setBrowserStorageItem: 'a => Js.Promise.t(unit) = "browser.storage.local.set";

[@bs.val] external getBrowserStorageItem: string => Js.Promise.t(eventMap) = "browser.storage.local.get";

let set = (item: 'a, onResolve: unit => unit, onReject: Js.Promise.error => unit) =>
  ignore(
      Js.Promise.(
        setBrowserStorageItem(item)
        |> then_(value => {
            onResolve(value);
            resolve(value);
          })
        |> catch(err => {
            onReject(err);
            reject(Reject(err));
          })
      ),
    );


let get = (key: string, onResolve: eventMap => unit, onReject: Js.Promise.error => unit) =>
  ignore(
      Js.Promise.(
        getBrowserStorageItem(key)
        |> then_(value => {
            let events: eventMap = [%bs.raw {| Object.values(value)[0] |}];
            onResolve(events);
            resolve(value);
          })
        |> catch(err => {
            onReject(err);
            reject(Reject(err));
          })
      ),
    );
