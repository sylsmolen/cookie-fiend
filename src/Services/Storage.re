exception Reject(Js.Promise.error);

[@bs.deriving abstract]
type storageItem = {label: string};


[@bs.val] external setBrowserStorageItem: storageItem => Js.Promise.t(unit) = "storage.local.set";

let saveInBrowserStorage = (~text: string, ~onResolve: unit => unit, ~onReject: Js.Promise.error => unit) =>
  ignore(
      Js.Promise.(
        setBrowserStorageItem(storageItem(~label=text))
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

