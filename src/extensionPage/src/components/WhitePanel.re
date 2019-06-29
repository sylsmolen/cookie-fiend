open Utils;

let styles = requireCSS("./WhitePanel.css");

[@bs.deriving abstract]
type style = {panel: string};

[@react.component]
let make = (~children, ~className="") => {
  <div className={panelGet(styles) ++ " " ++ className}> children </div>;
};