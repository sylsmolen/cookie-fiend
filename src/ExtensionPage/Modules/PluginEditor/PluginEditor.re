open Utils;

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
    let callDispatch = (act) => React.useCallback1(act, [|dispatch|])    
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
      savePlugin
      setUrl=callDispatch(value => dispatch(SetUrl(value)))
      setTimeout=callDispatch((id, value) => dispatch(SetTimeout(id, value)))
      selectEventType=callDispatch((id, value) => dispatch(SelectEventType(id, value)))
      setEventName=callDispatch((id, value) => dispatch(SetEventName(id, value)))
      selectSelectorType=callDispatch((id, value) => dispatch(SelectSelectorType(id, value)))
      setSelector=callDispatch((id, value) => dispatch(SetSelector(id, value)))
      setRepeat=callDispatch((id, value) => dispatch(SetRepeat(id, value)))
      setEventValue=callDispatch((id, value) => dispatch(SetEventValue(id, value)))
      selectMode=callDispatch((id, value) => dispatch(SelectMode(id, value)))
      setModeValue=callDispatch((id, value) => dispatch(SetModeValue(id, value)))
      removeEvent=callDispatch(id => dispatch(RemoveEvent(id)))
      addEvent=callDispatch(_ => dispatch(AddEvent))
      setPluginName=callDispatch(value => dispatch(SetPluginName(value)))
      selectScope=callDispatch(value => dispatch(SelectScope(value)))
      scope={state.pluginDetails.scope}
      name={state.pluginDetails.name}
      url={state.pluginDetails.url}
      events={state.events}
    />;
  });
