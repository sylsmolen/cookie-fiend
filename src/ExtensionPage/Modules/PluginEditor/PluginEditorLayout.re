open Utils;

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditorLayout.css");

[@react.component]
let make =
    (
      ~events,
      ~selectScope,
      ~setTimetout,
      ~selectEventType,
      ~setEventName,
      ~selectSelectorType,
      ~setSelector,
      ~setRepeat,
      ~setEventValue,
      ~selectMode,
      ~setModeValue,
      ~removeEvent,
      ~addEvent,
    ) => {
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
      Array.of_list(IntMap.bindings(events)),
    );

  <div className={containerGet(styles)}>
    <h1> {ReasonReact.string("Create new plugin")} </h1>
    <div> {ReasonReact.array(eventList)} </div>
    <div className={btnContainerGet(styles)}>
      <Button
        className={addEventBtnGet(styles)}
        style=Primary
        onClick=addEvent
        buttonText="Add event"
      />
    </div>
  </div>;
};