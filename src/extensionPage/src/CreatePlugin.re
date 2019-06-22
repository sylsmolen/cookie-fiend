open Utils;

[@bs.deriving abstract]
type style = {container: string};

let styles: style = requireCSS("./CreatePlugin.css");

type action =
  | AddEvent
  | RemoveEvent;

type state = {events: list(string)};

let initialState = {events: ["stuff"]};

Js.log(containerGet(styles));
[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | AddEvent => state
        | RemoveEvent => state
        },
      initialState,
    );
  <div className={containerGet(styles)}>
    <h1> {ReasonReact.string("Create new plugin")} </h1>
    <EventForm />
  </div>;
};