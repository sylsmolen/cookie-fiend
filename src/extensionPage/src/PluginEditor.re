open Utils;

[@bs.deriving abstract]
type style = {container: string};

let styles: style = requireCSS("./PluginEditor.css");

type action =
  | AddEvent
  | RemoveEvent
  | MoveEventUp
  | MoveEventDown
  | SetTimetout((int, int))
  | SelectScope((int, string))
  | SelectEvent((int, string))
  | SetEventName((int, string))
  | SelectSelectorType((int, string))
  | SetSelector((int, string))
  | SetRepeat((int, int))
  | SetEventValue((int, string))
  | SelectMode((int, string))
  | SetModeValue((int, string));

type pluginEvent = {
  position: int,
  selectorType: string,
  selector: string,
  mode: string,
  modeValue: string,
  scope: string,
  eventType: string,
  eventName: string,
  eventValue: string,
  timeout: int,
  repeat: int,
};

let blankEventState: pluginEvent = {
  position: 0,
  eventName: "",
  mode: Settings.mode_once,
  modeValue: "",
  selectorType: Settings.selector_css,
  selector: "",
  eventValue: "",
  scope: Settings.scope_url,
  eventType: Settings.event_style,
  timeout: 0,
  repeat: 1,
};

type eventMap = IntMap.t(pluginEvent);
let emptyEventMap = IntMap.empty;

// let result: pluginEvent = IntMap.find(1, events3);

type state = {events: eventMap};
let initialState: state = {events: IntMap.add(0, blankEventState, emptyEventMap)};




[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | AddEvent =>
          let lastIndex = getLastIntMapIndex(state.events);
          let updatedEventMap = IntMap.add(lastIndex + 1, blankEventState, state.events);
          {events: updatedEventMap};
        | RemoveEvent => state
        | MoveEventUp => state
        | MoveEventDown => state
        // | SelectScope((position, scope)) => {...state, scope}
        // | SelectMode((position, mode)) => {...state, mode}
        // | SelectEvent((position, event)) => {...state, event}
        // | SetTimetout((position, timeout)) => {...state, timeout}
        // | SetEventName((position, eventName)) => {...state, eventName}
        // | SelectSelectorType((position, selectorType)) => {...state, selectorType}
        // | SetSelector((position, selector)) => {...state, selector}
        // | SetRepeat((position, repeat)) => {...state, repeat}
        // | SetEventValue((position, eventValue)) => {...state, eventValue}
        // | SetModeValue((position, modeValue)) => {...state, modeValue}
        },
      initialState,
    );

  let getEventsAsArray = el => {
    ();
  };

  let eventsAsList = IntMap.bindings()
  // let mapEventList = event => <p> {ReasonReact.string("event")} </p>; // <Event event />;
  let eventList = Array.map(mapEventList, Array_of_list());

  <div className={containerGet(styles)}>
    <h1> {ReasonReact.string("Create new plugin")} </h1>
    <Button
      // TODO
      className=""
      style=Primary
      onClick={_e => dispatch(AddEvent)}
      buttonText="Add event"
    />
    {ReasonReact.array(eventList)}
  </div>;
};