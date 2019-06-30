open Utils;

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

[@react.component]
let make =
  React.memo(() => {
    let (state, dispatch) = React.useReducer(PluginReducer.get, initialState);
    let {
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
    }: PluginActions.pluginActions =
      PluginActions.get(dispatch);

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