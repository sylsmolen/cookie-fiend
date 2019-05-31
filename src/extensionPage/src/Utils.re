[@bs.deriving abstract]
type locals = {testStyle: string};

[@bs.deriving abstract]
type style = {locals};


[@bs.val] external requireCSS: ('jsObject) = string => ('jsObject) = "require";
