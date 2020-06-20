open Utils;

[@bs.deriving abstract]
type style = {
  numberField: string,
  label: string,
};

let styles = requireCSS("./NumberField.css");

[@react.component]
let make = (~labelText: string, ~value: int, ~step=1.0, ~min=0, ~onChange: int => unit) => {
  let handleChange = event => getFormEventValue(event)->int_of_string->onChange;

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <input
      min
      step
      className={numberFieldGet(styles)}
      value={string_of_int(value)}
      type_="number"
      onChange=handleChange
    />
  </div>;
};
