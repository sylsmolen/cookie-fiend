[@bs.deriving abstract]
type locals = {testStyle: string};

[@bs.deriving abstract]
type style = {locals};

[@bs.val] external requireCSSNoPath: string => style = "require";

let requireCSS = (component: string) => requireCSSNoPath("../../../src/" ++ component ++ ".css");