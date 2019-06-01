open Utils;

[@bs.deriving abstract]
type style = {
  textField: string,
  label: string,
};
let styles = requireCSS("./TextField.css");

Js.log(styles);

[@react.component]
let make = (~labelText: string) => {
  let (value: string, onChange) = React.useState(() => "");

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <input
      className={textFieldGet(styles)}
      value
      type_="text"
      onChange={event => onChange(ReactEvent.Form.target(event)##value)}
    />
  </div>;
};