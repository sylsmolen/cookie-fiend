open Utils;

let styles = requireCSS("./WhitePanel.css");

[@bs.deriving abstract]
type style = {panel: string};

[@react.component]
let make = (~children) => {
  <div className={panelGet(styles)}> children </div>;
};