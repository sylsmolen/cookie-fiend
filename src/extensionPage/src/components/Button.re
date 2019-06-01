open Utils;

[@bs.deriving abstract]
type style = {
  primary: string,
  secondary: string,
  buttonText: string,
};
let styles = requireCSS("./Button.css");

Js.log(styles);

module Primary = {
  [@react.component]
  let make = (~buttonText: string, ~onClick) => {
    <button className={primaryGet(styles)} onClick> {ReasonReact.string(buttonText)} </button>;
  };
};

module Secondary = {
  [@react.component]
  let make = (~buttonText: string, ~onClick) => {
    <button className={secondaryGet(styles)} onClick>
      <span className={buttonTextGet(styles)}> {ReasonReact.string(buttonText)} </span>
    </button>;
  };
};