open Utils;

let callback = (fn, args) => {
  React.useCallback1(fn, args);
};

let initialState: PluginReducer.state = {
  tabQueryError: false,
  tabs: [||],
  pluginDetails: {
    scope: Settings.scope_url,
    name: "",
    url: ""
  },
  events: IntMap.add(0, PluginReducer.blankEvent, IntMap.empty),
};

[@react.component]
let make =
  React.memo(() => {
    let (state, dispatch) = React.useReducer(PluginReducer.get, initialState);
    let selectScope = callback(value => dispatch(SelectScope(value)), [|dispatch|]);
    let setPluginName = callback(value => dispatch(SetPluginName(value)), [|dispatch|]);
    let setUrl = callback(value => dispatch(SetUrl(value)), [|dispatch|]);
    let setTimetout =
      callback((id, value) => dispatch(SetTimetout((id, value))), [|dispatch|]);
    let selectEventType =
      callback((id, value) => dispatch(SelectEventType((id, value))), [|dispatch|]);
    let setEventName =
      callback((id, value) => dispatch(SetEventName((id, value))), [|dispatch|]);
    let selectSelectorType =
      callback((id, value) => dispatch(SelectSelectorType((id, value))), [|dispatch|]);
    let setSelector =
      callback((id, value) => dispatch(SetSelector((id, value))), [|dispatch|]);
    let setRepeat = callback((id, value) => dispatch(SetRepeat((id, value))), [|dispatch|]);
    let setEventValue =
      callback((id, value) => dispatch(SetEventValue((id, value))), [|dispatch|]);
    let selectMode = callback((id, value) => dispatch(SelectMode((id, value))), [|dispatch|]);
    let setModeValue =
      callback((id, value) => dispatch(SetModeValue((id, value))), [|dispatch|]);
    let removeEvent = React.useCallback1(id => dispatch(RemoveEvent(id)), [|dispatch|]);
    let addEvent = callback(_ => dispatch(AddEvent), [|dispatch|]);
    let receiveTabs = (value: Tabs.tabs) => dispatch(ReceiveTabs(value));
    let tabQeryError = _ => dispatch(TabQueryError);    

    React.useEffect0(() => {
      Tabs.getActiveTabs(~onResolve=receiveTabs, ~onReject=tabQeryError)
      None
    });

    let savePluginSuccess = () => Js.log("Item saved");
    let savePluginError = (err) => Js.log(err);

    let savePlugin = () => {
       Js.log("saving");
      Storage.set(state.pluginDetails.name, savePluginSuccess, savePluginError)
    }

    Js.log(state.tabs);

    Js.log("render PE");
    <PluginEditorLayout
      selectScope
      savePlugin
      setUrl
      setPluginName
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
      scope={state.pluginDetails.scope}
      name={state.pluginDetails.name}
      url={state.pluginDetails.url}
      events={state.events}
    />;
  });