open Utils;

[@bs.deriving abstract]
type style = {
  textField: string,
  label: string,
};

let styles = requireCSS("./TextField.css");

[@react.component]
let make = (~labelText: string, ~value: string, ~onChange: string => unit) => {
  let handleChange = event => getFormEventValue(event)->onChange;

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <input className={textFieldGet(styles)} value type_="text" onChange=handleChange />
  </div>;
};
