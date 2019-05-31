open Utils;

[@bs.deriving abstract]
type style = {testStyle: string};

[@bs.val] external requireCSSNoPaths: string => style = "require";

let wtf = requireCSSNoPaths("./Component1.css");

let styles = requireCSS("Component1");

Js.log(testStyleGet(wtf));

let handleClick = _event => Js.log(wtf);

[@react.component]
let make = (~message) =>
  <div className={testStyleGet(wtf)} onClick=handleClick>
    <TextField />
    {ReasonReact.string(message)}
  </div>;