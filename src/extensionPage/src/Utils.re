[@bs.deriving abstract]
type style = {testStyle: string};

[@bs.val] external requireCSSNoPath: string => style = "require";

let requireCSS = (path: string) => requireCSSNoPath("../../../src/" ++ path);