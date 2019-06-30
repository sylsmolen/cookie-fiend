open Utils;
open PluginReducer;
type callback('input, 'output) = 'input => 'output;
type stringValueAction = callback(int, string => unit);
type intValueAction = callback(int, int => unit);

type pluginActions = {
  removeEvent: callback(int, unit),
  selectScope: stringValueAction,
  selectEventType: stringValueAction,
  setEventName: stringValueAction,
  selectSelectorType: stringValueAction,
  setSelector: stringValueAction,
  setEventValue: stringValueAction,
  selectMode: stringValueAction,
  setModeValue: stringValueAction,
  setRepeat: intValueAction,
  setTimetout: intValueAction,
};

let get = dispatch => {
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
  {
    selectScope,
    setTimetout,
    selectEventType,
    setEventName,
    selectSelectorType,
    setSelector,
    setRepeat,
    setEventValue,
    selectMode,
    setModeValue,
    removeEvent,
  };
};