open Utils;

[@bs.deriving abstract]
type style = {
  selectField: string,
  label: string,
};

let styles = requireCSS("./SelectField.css");

[@react.component]
let make = (~labelText: string, ~children) => {
  let (value: string, onSelectionChange) = React.useState(() => "");

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select
      className={selectFieldGet(styles)}
      value
      onChange={event => onSelectionChange(ReactEvent.Form.target(event)##value)}>
      children
    </select>
  </div>;
};