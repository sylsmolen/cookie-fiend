open Utils;

[@bs.deriving abstract]
type style = {
  form: string,
  panel: string,
  removeEventBtn: string,
  numberInputs: string,
};

let styles: style = requireCSS("./Event.css");

[@react.component]
let make =
    (
      ~event: PluginReducer.event,
      ~removeEvent,
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
    ) => {
  let onScopeChange = value => selectScope(event.id, value);
  let onModeChange = value => selectMode(event.id, value);
  let onModeValueChange = value => setModeValue(event.id, value);
  let onEventTypeChange = value => selectEventType(event.id, value);
  let onTimeoutChange = value => setTimetout(event.id, value);
  let onEventNameChange = value => setEventName(event.id, value);
  let onSetRepeat = value => setRepeat(event.id, value);
  let onSelectSelectorType = value => selectSelectorType(event.id, value);
  let onSetSelector = value => setSelector(event.id, value);
  let onSetEventValue = value => setEventValue(event.id, value);

  <WhitePanel className={panelGet(styles)}>
    <div className={formGet(styles)}>
      <Flex style=[Row, JustifyContentSpaceBetween]>
        <SelectField
          labelText="Scope"
          options=Settings.scope
          disabledOptions=[Settings.scope_browser]
          value={event.scope}
          onChange=onScopeChange
        />
        <SelectField
          labelText="Execution mode"
          options=Settings.mode
          value={event.mode}
          onChange=onModeChange
        />
        <TextField labelText="Mode value" value={event.modeValue} onChange=onModeValueChange />
        <SelectField
          labelText="Event type"
          options=Settings.event
          value={event.eventType}
          onChange=onEventTypeChange
        />
        <SelectField
          labelText="Selector"
          options=Settings.selector
          disabledOptions=[Settings.selector_xpath]
          value={event.selectorType}
          onChange=onSelectSelectorType
        />
        <TextField labelText="Event name" value={event.eventName} onChange=onEventNameChange />
        <TextField labelText="Event value" value={event.eventValue} onChange=onSetEventValue />
        <TextField labelText="Selector" value={event.selector} onChange=onSetSelector />
        <Flex style=[Row, JustifyContentSpaceBetween] className={numberInputsGet(styles)}>
          <>
            <NumberField
              labelText="Timeout (ms)"
              step=50.0
              value={event.timeout}
              onChange=onTimeoutChange
            />
            <NumberField min=1 labelText="Repeat" value={event.repeat} onChange=onSetRepeat />
          </>
        </Flex>
      </Flex>
    </div>
    <Button
      className={removeEventBtnGet(styles)}
      style=Cancel
      onClick={_e => removeEvent(event.id)}
      buttonText="Remove event"
    />
  </WhitePanel>;
};

/*




  {
     "position": 0,
     "repeat": 0,
       "timeout": 0,

            "modeParam": "#qcCmpUi",
 "value": {
       "background-color": "red"
     },

     "event": "style",
     "name": "cookie info box",
     "selector": "/html/body/div[3]/div[2]/div[1]/div[2]/h1",
     "selectorType": "XPATH",
     "condition":

     "mode": "on load",


     "selectedElement": null,
     "trigger": null
   }
 ]
   ,
   {
     "position": 1,
     "repeat": 0,
     "event": "click",
     "name": "open settings",
     "selector": "#qc-cmp-purpose-button",
     "selectorType"
     "timeout": 0,
     "mode": "once",
     "modeParam": "",
     "value": null,
     "selectedElement": null,
     "trigger": null
   },
   {
     "position": 2,
     "repeat": 0,
     "event": "click",
     "name": "reject cookies",
     "selector": "button.qc-cmp-button:nth-child(1)",
     "selectorType":
     "timeout": 0,
     "mode": "once",
     "modeParam": "",
     "value": null,
     "selectedElement": null,
     "trigger": null
   }

 */