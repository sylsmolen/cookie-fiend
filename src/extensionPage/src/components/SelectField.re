open Utils;

[@bs.deriving abstract]
type style = {
  selectField: string,
  label: string,
  option: string,
};

let styles = requireCSS("./SelectField.css");

[@react.component]
let make =
    (
      ~labelText: string,
      ~value: 'selectable,
      ~options: array('selectable),
      ~getter: 'selectable => string,
      ~onChange,
    ) => {
  let mapOptions = optionLabel =>
    <option value={getter(optionLabel)} className={optionGet(styles)}>
      {ReasonReact.string(getter(optionLabel))}
    </option>;
  let optionList = Array.map(mapOptions, options);

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select className={selectFieldGet(styles)} value={getter(value)} onChange>
      {ReasonReact.array(optionList)}
    </select>
  </div>;
};