open Utils;

[@bs.deriving abstract]
type tabQuery = {
  currentWindow: bool,
  active: bool,
};

let query = tabQuery(~currentWindow=true, ~active=false);

[@bs.val] external queryTab: tabQuery => string = "browser.tabs.query";

let res = queryTab(query);
Js.log(res);

/*

  const activeTabQuery = window.browser.tabs.query({
    currentWindow: true,
    active: true
  })

  export const getActiveTabAsync = async () =>
    activeTabQuery.then(head, logErr("couldn't get active tab"))

 let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2));
    */

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditor.css");

let initialState: PluginReducer.state = {
  events: IntMap.add(0, PluginReducer.blankEvent, IntMap.empty),
};

let callback = fn => {
  React.useCallback(fn);
};

[@react.component]
let make =
  React.memo(() => {
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