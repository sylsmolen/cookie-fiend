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
      ~url,
      ~setUrl,
      ~selectScope,
      ~setPluginName,
      ~setTimeout,
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
      ~savePlugin
    ) => {
    let onScopeChange = callback(value => selectScope(value));
    let onSetPluginName = callback(value => setPluginName(value));
    let onSetUrl = callback(value => setUrl(value));
    let onSavePlugin = callback(_ => savePlugin());

    let eventList =
      Array.map(
        ((key: int, event)) =>
          <EventElement
            key={string_of_int(key)}
            event
            setTimeout
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
       <Flex style=[Row, JustifyContentSpaceBetween]>
         <h1> {ReasonReact.string("Create new plugin")} </h1>
         <Button
           style=Primary
           onClick=onSavePlugin
           buttonText="Save" />
       </Flex> 

       <div>
         <TextField labelText="Name" value=name onChange=onSetPluginName />
         <TextField labelText="Url" value=url onChange=onSetUrl />
         <SelectField
           labelText="Scope"
           options=Settings.scope
           value=scope
           onChange=onScopeChange
           disabledOptions=[Settings.scope_browser] />
       </div>

       <div> {ReasonReact.array(eventList)} </div>

       <div className={btnContainerGet(styles)}>
         <Button
           className={addEventBtnGet(styles)}
           style=Primary
           onClick=addEvent
           buttonText="Add event" />
        </div>        
      </div>;
  });
