open Utils;
open Tabs;

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditor.css");

let callback = fn => {
  React.useCallback(fn);
};
let initialState: PluginReducer.state = {
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

    let receiveTabs = (value: tabs) => {
      dispatch(ReceivedTabQuery(value));
    };

    let tabsError = err => {
      dispatch(TabQueryError(err.value));
    };

    React.useEffect0(() => {
      ignore(getActiveTabs(~onResolve=receiveTabs, ~onReject=tabsError));
      None;
    });

    Js.log(state.tabs);

    let eventList =
      Array.map(
        ((key: int, event: PluginReducer.event)) =>
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
          />,
        Array.of_list(IntMap.bindings(state.events)),
      );

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