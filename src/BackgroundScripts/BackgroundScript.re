[@bs.deriving abstract]
type windowOptions = {
  [@bs.as "type"]
  _type: string,
  url: string,
  width: int,
  height: int,
};

[@bs.deriving abstract]
type tabOptions = {url: string};

[@bs.val]
external onBrowserActionClick: (unit => unit) => unit =
  "browser.browserAction.onClicked.addListener";
[@bs.val] external createWindow: windowOptions => unit = "browser.windows.create";
[@bs.val] external createTab: tabOptions => unit = "browser.tabs.create";

let extensionPageWindow =
  windowOptions(
    ~_type="detached_panel",
    ~url="/extension_page/index.html",
    ~width=850,
    ~height=550,
  );

let extensionPageTab = tabOptions(~url="/extension_page/index.html");

// onBrowserActionClick(() => createWindow(extensionPageWindow));
onBrowserActionClick(() => createTab(extensionPageTab));