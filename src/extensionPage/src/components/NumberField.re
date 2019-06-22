open Utils;

[@bs.deriving abstract]
type style = {
  textField: string,
  label: string,
};

let styles = requireCSS("./NumberField.css");

[@react.component]
let make = (~labelText: string, ~value: int, ~onChange: int => unit) => {
  let handleChange = event => getFormEventValue(event)->int_of_string->onChange;

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <input
      className={textFieldGet(styles)}
      value={string_of_int(value)}
      type_="number"
      onChange=handleChange
    />
  </div>;
};