open Utils;

let callback = fn => {
  React.useCallback(fn);
};

let initialState: PluginReducer.state = {
  tabQueryError: false,
  tabs: [||],
  events: IntMap.add(0, PluginReducer.blankEvent, IntMap.empty),
};

[@react.component]
let make =
  React.memo(() => {
    [@react.component]
    let (state, dispatch) = React.useReducer(PluginReducer.get, initialState);

    let selectScope = callback((id, value) => dispatch(SelectScope((id, value))));
    let setTimetout = callback((id, value) => dispatch(SetTimetout((id, value))));
    let selectEventType = callback((id, value) => dispatch(SelectEventType((id, value))));
    let setEventName = callback((id, value) => dispatch(SetEventName((id, value))));
    let selectSelectorType = callback((id, value) => dispatch(SelectSelectorType((id, value))));
    let setSelector = callback((id, value) => dispatch(SetSelector((id, value))));
    let setRepeat = callback((id, value) => dispatch(SetRepeat((id, value))));
    let setEventValue = callback((id, value) => dispatch(SetEventValue((id, value))));
    let selectMode = callback((id, value) => dispatch(SelectMode((id, value))));
    let setModeValue = callback((id, value) => dispatch(SetModeValue((id, value))));
    let removeEvent = callback(id => dispatch(RemoveEvent(id)));
    let addEvent = callback(_ => dispatch(AddEvent));

    let receiveTabs = (value: Tabs.tabs) => dispatch(ReceiveTabs(value));
    let tabQeryError = _ => dispatch(TabQueryError);

    React.useEffect0(() => {
      Tabs.getActiveTabs(~onResolve=receiveTabs, ~onReject=tabQeryError);
      None;
    });

    Js.log(state.tabs);

    <PluginEditorLayout
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
      addEvent
      events={state.events}
    />;
  });