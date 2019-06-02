open Utils;

[@bs.deriving abstract]
type style = {
  selectField: string,
  label: string,
  option: string,
};

let styles = requireCSS("./SelectField.css");

[@react.component]
let make = (~labelText: string, ~options: array(string)) => {
  let (value: string, onSelectionChange) = React.useState(() => "");
  let mapOptions = (optionLabel: string) =>
    <option className={optionGet(styles)}> {ReasonReact.string(optionLabel)} </option>;
  let optionList = Array.map(mapOptions, options);

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select
      className={selectFieldGet(styles)}
      value
      onChange={event => onSelectionChange(ReactEvent.Form.target(event)##value)}>
      {ReasonReact.array(optionList)}
    </select>
  </div>;
};