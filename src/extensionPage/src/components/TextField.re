/* State declaration */

[@react.component]
let make = () => {
  let (value: string, onChange) = React.useState(() => "");

  <div>
    <input
      value
      type_="text"
      onChange={event => onChange(ReactEvent.Form.target(event)##value)}
    />
  </div>;
};