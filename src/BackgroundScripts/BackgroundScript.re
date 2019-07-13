let x: unit => unit = [%bs.raw
  {|
browser.browserAction.onClicked.addListener(() => {
  var createData = {
    type: 'detached_panel',
    url: '/extension_page/index.html',
    width: 850,
    height: 550
  }
  browser.windows.create(createData)
})
|}
];

x();