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
  React.memo(
    (
      ~events,
      ~scope,
      ~name,
      ~selectScope,
      ~setPluginName,
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
    let onScopeChange = callback(value => selectScope(value));
    let onSetPluginName = callback(value => setPluginName(value));

    let eventList =
      Array.map(
        ((key: int, event)) =>
          <Event
            key={string_of_int(key)}
            event
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
      <div>
        <TextField labelText="Selector" value=name onChange=onSetPluginName />
        <SelectField
          labelText="Scope"
          options=Settings.scope
          value=scope
          onChange=onScopeChange
          disabledOptions=[Settings.scope_browser]
        />
      </div>
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
  });