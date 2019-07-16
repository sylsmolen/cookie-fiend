[@bs.deriving abstract]
type windowOptions = {
  url: string,
  width: int,
  height: int,
};

[@bs.val]
external onBrowserActionClick: (unit => unit) => unit =
  "browser.browserAction.onClicked.addListener";
[@bs.val] external createWindow: windowOptions => unit = "browser.windows.create";

let extensionPageWindow =
  windowOptions(~url="/extension_page/index.html", ~width=850, ~height=550);

onBrowserActionClick(() => createWindow(extensionPageWindow));