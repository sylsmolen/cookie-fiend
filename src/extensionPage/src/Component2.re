/* State declaration */
type state = {
  count: int,
  show: bool,
};

/* Action declaration */
type action =
  | Click
  | Toggle;

[@react.component]
let make = (~greeting) => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Click => {...state, count: state.count + 1}
        | Toggle => {...state, show: !state.show}
        },
      {count: 0, show: true},
    );

  let message = "You've clickesd this " ++ string_of_int(state.count) ++ " times(s)";
  <div>
    <Button style=Primary onClick={_event => dispatch(Click)} buttonText=message />
    <Button style=Secondary onClick={_event => dispatch(Toggle)} buttonText="Toggle greeting" />
    <Button style=Inverted onClick={_event => dispatch(Toggle)} buttonText="Toggle greeting" />
    <Button style=Cancel onClick={_event => dispatch(Toggle)} buttonText="Cancel" />
    {state.show ? ReasonReact.string(greeting) : ReasonReact.null}
  </div>;
};