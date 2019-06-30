open Utils;

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditor.css");

type eventMap = IntMap.t(PluginReducer.event);
let emptyEventMap = IntMap.empty;

let initialState: PluginReducer.state = {
  events: IntMap.add(0, PluginReducer.blankEvent, emptyEventMap),
};

[@react.component]
let make =
  React.memo(() => {
    let (state, dispatch) = React.useReducer(PluginReducer.getReducer, initialState);
    let selectScope = React.useCallback((id, scope) => dispatch(SelectScope((id, scope))));
    let setTimetout = React.useCallback((id, timeout) => dispatch(SetTimetout((id, timeout))));
    let selectEventType =
      React.useCallback((id, eventType) => dispatch(SelectEventType((id, eventType))));
    let setEventName =
      React.useCallback((id, eventName) => dispatch(SetEventName((id, eventName))));
    let selectSelectorType =
      React.useCallback((id, selectorType) => dispatch(SelectSelectorType((id, selectorType))));
    let setSelector =
      React.useCallback((id, selector) => dispatch(SetSelector((id, selector))));
    let setRepeat = React.useCallback((id, repeat) => dispatch(SetRepeat((id, repeat))));
    let setEventValue =
      React.useCallback((id, eventValue) => dispatch(SetEventValue((id, eventValue))));
    let selectMode = React.useCallback((id, mode) => dispatch(SelectMode((id, mode))));
    let setModeValue =
      React.useCallback((id, modeValue) => dispatch(SetModeValue((id, modeValue))));
    let removeEvent = React.useCallback(id => dispatch(RemoveEvent(id)));

    let mapEventList = ((key: int, event: PluginReducer.event)) =>
      <Event
        key={string_of_int(key)}
        event
        selectScope
        setTimetout
        selectEventType
        setEventName
        selectSelectorType
        setSelector
        setRepeat
        setEventValue
        selectMode
        setModeValue
        removeEvent
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
  });