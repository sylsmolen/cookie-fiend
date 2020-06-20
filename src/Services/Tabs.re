[@bs.deriving abstract]
type tabQuery = {active: bool};

type tab = {
  active: bool,
  windowId: int,
  id: int,
  title: string,
  url: string,
};

type tabs = array(tab);

exception TabQueryError(Js.Promise.error);

[@bs.val] external queryTab: tabQuery => Js.Promise.t(tabs) = "browser.tabs.query";

let getTabs = (query: tabQuery, ~onResolve: tabs => unit, ~onReject: Js.Promise.error => unit) =>
  ignore(
    Js.Promise.(
      queryTab(query)
      |> then_(value => {
           onResolve(value);
           resolve(value);
         })
      |> catch(err => {
           onReject(err);
           reject(TabQueryError(err));
         })
    ),
  );

let activeTabQuery = tabQuery(~active=true);
let getActiveTabs = getTabs(activeTabQuery);
