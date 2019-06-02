open Utils;

[@bs.deriving abstract]
type style = {
  selectField: string,
  label: string,
  option: string,
};

let styles = requireCSS("./SelectField.css");

[@react.component]
let make = (~labelText: string, ~value: string, ~options: array(string), ~onChange) => {
  // let (value: string, onSelectionChange) = React.useState(() => "");
  let mapOptions = (optionLabel: string) =>
    <option value=optionLabel className={optionGet(styles)}>
      {ReasonReact.string(optionLabel)}
    </option>;
  let optionList = Array.map(mapOptions, options);

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select className={selectFieldGet(styles)} value onChange>
      {ReasonReact.array(optionList)}
    </select>
  </div>;
};