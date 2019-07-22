open Utils;

[@bs.deriving abstract]
type style = {
  form: string,
  panel: string,
  removeEventBtn: string,
  numberInputs: string,
};

let styles: style = requireCSS("./Event.css");

let callback = fn => {
  React.useCallback(fn);
};

[@react.component]
let make =
  React.memo(
    (
      ~event: PluginReducer.event,
      ~removeEvent,
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
    let onModeChange = callback(value => selectMode(event.id, value));
    let onModeValueChange = callback(value => setModeValue(event.id, value));
    let onEventTypeChange = callback(value => selectEventType(event.id, value));
    let onTimeoutChange = callback(value => setTimetout(event.id, value));
    let onEventNameChange = callback(value => setEventName(event.id, value));
    let onSetRepeat = callback(value => setRepeat(event.id, value));
    let onSelectSelectorType = callback(value => selectSelectorType(event.id, value));
    let onSetSelector = callback(value => setSelector(event.id, value));
    let onSetEventValue = callback(value => setEventValue(event.id, value));

    Js.log("rerender: " ++ string_of_int(event.id));
    <WhitePanel className={panelGet(styles)}>
      <div className={formGet(styles)}>
        <Flex style=[Row, JustifyContentSpaceBetween]>
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
  });
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