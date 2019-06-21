open Utils;

[@bs.deriving abstract]
type style = {testStyle: string};
let styles: style = requireCSS("./Component1.css");

Js.log(testStyleGet(styles));

let handleClick = _event => Js.log(styles);

[@react.component]
let make = (~message) =>
  <div className={testStyleGet(styles)} onClick=handleClick>
    
    {ReasonReact.string(message)}
  </div>;