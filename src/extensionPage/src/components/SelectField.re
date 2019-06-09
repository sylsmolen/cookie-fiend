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
      ~getOptionValue: 'selectable => string,
      ~onChange,
      ~disabledOptions=[],
    ) => {
  let mapOptions = option =>
    <option
      value={getOptionValue(option)}
      disabled={List.exists(disabledOption => disabledOption === option, disabledOptions)}
      className={optionGet(styles)}>
      {ReasonReact.string(getOptionValue(option))}
    </option>;
  let optionList = Array.map(mapOptions, options);

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select className={selectFieldGet(styles)} value={getOptionValue(value)} onChange>
      {ReasonReact.array(optionList)}
    </select>
  </div>;
};