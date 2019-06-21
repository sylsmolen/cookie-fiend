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
      ~options: list('selectable),
      ~onChange: 'selectable => unit,
      ~disabledOptions=[],
    ) => {
  let mapOptions = option =>
    <option
      key=option
      value=option
      disabled={List.exists(disabledOption => disabledOption === option, disabledOptions)}
      className={optionGet(styles)}>
      {ReasonReact.string(option)}
    </option>;

  let optionList = Array.map(mapOptions, Array.of_list(options));
  let handleChange = event => onChange(ReactEvent.Form.target(event)##value);

  <div>
    <p className={labelGet(styles)}> {ReasonReact.string(labelText)} </p>
    <select className={selectFieldGet(styles)} value onChange=handleChange>
      {ReasonReact.array(optionList)}
    </select>
  </div>;
};