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
  | SelectEventType((int, string))
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
        | SelectScope((id, scope)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), scope}, state.events),
          }
        | SelectMode((id, mode)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), mode}, state.events),
          }
        | SelectEventType((id, eventType)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), eventType}, state.events),
          }
        | SetTimetout((id, timeout)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), timeout}, state.events),
          }
        | SetEventName((id, eventName)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), eventName}, state.events),
          }
        | SelectSelectorType((id, selectorType)) => {
            events:
              IntMap.add(id, {...IntMap.find(id, state.events), selectorType}, state.events),
          }
        | SetSelector((id, selector)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), selector}, state.events),
          }
        | SetRepeat((id, repeat)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), repeat}, state.events),
          }
        | SetEventValue((id, eventValue)) => {
            events:
              IntMap.add(id, {...IntMap.find(id, state.events), eventValue}, state.events),
          }
        | SetModeValue((id, modeValue)) => {
            events: IntMap.add(id, {...IntMap.find(id, state.events), modeValue}, state.events),
          }
        },
      initialState,
    );

  let mapEventList = ((key: int, event: Plugin.event)) =>
    <Event
      key={string_of_int(key)}
      event
      selectScope={(id, scope) => dispatch(SelectScope((id, scope)))}
      setTimetout={(id, timeout) => dispatch(SetTimetout((id, timeout)))}
      selectEventType={(id, eventType) => dispatch(SelectEventType((id, eventType)))}
      setEventName={(id, eventName) => dispatch(SetEventName((id, eventName)))}
      selectSelectorType={(id, selectorType) =>
        dispatch(SelectSelectorType((id, selectorType)))
      }
      setSelector={(id, selector) => dispatch(SetSelector((id, selector)))}
      setRepeat={(id, repeat) => dispatch(SetRepeat((id, repeat)))}
      setEventValue={(id, eventValue) => dispatch(SetEventValue((id, eventValue)))}
      selectMode={(id, mode) => dispatch(SelectMode((id, mode)))}
      setModeValue={(id, modeValue) => dispatch(SetModeValue((id, modeValue)))}
      removeEvent={id => dispatch(RemoveEvent(id))}
    />;
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