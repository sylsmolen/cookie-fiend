open Utils;

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditor.css");

type action =
  | AddEvent
  | RemoveEvent(int)
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

let blankEventState: Plugin.event = {
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
  id: 0,
};

type eventMap = IntMap.t(Plugin.event);
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
          let updatedEventMap =
            IntMap.add(lastIndex + 1, {...blankEventState, id: lastIndex}, state.events);
          {events: updatedEventMap};
        | RemoveEvent(id) => {events: IntMap.remove(id, state.events)}
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

  let mapEventList = ((key: int, event: Plugin.event)) =>
    <Event key={string_of_int(key)} event removeEvent={id => dispatch(RemoveEvent(id))} />;
  let eventList = Array.map(mapEventList, Array.of_list(IntMap.bindings(state.events)));

  <div className={containerGet(styles)}>
    <h1> {ReasonReact.string("Create new plugin")} </h1>
    {ReasonReact.array(eventList)}
    <div className={btnContainerGet(styles)}>
      <Button
        className={addEventBtnGet(styles)}
        style=Primary
        onClick={_ => dispatch(AddEvent)}
        buttonText="Add event"
      />
    </div>
  </div>;
};