open Utils;

[@bs.deriving abstract]
type style = {
  form: string,
  saveButton: string,
  numberInputs: string,
};

let styles: style = requireCSS("./Event.css");

[@react.component]
let make = (~event: PluginEditor.pluginEvent) => {
  let onScopeChange = value => ();
  let onModeChange = value => ();
  let onModeValueChange = value => ();
  let onEventTypeChange = value => ();
  let onTimeoutChange = value => ();
  // value => dispatch(SelectScope(value))
  <div>
    <WhitePanel>
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
            onChange=onScopeChange
          />
          <TextField labelText="Mode value" value={event.modeValue} onChange=onScopeChange />
          <SelectField
            labelText="Event"
            options=Settings.event
            value={event.eventType}
            onChange=onScopeChange
          />
          <SelectField
            labelText="Selector"
            options=Settings.selector
            disabledOptions=[Settings.selector_xpath]
            value={event.selectorType}
            onChange=onScopeChange
          />
          <TextField labelText="Name" value={event.eventName} onChange=onScopeChange />
          <TextField labelText="Event value" value={event.eventValue} onChange=onScopeChange />
          <TextField labelText="Selector" value={event.selector} onChange=onScopeChange />
          <Flex style=[Row, JustifyContentSpaceBetween] className={numberInputsGet(styles)}>
            <>
              <NumberField
                labelText="Timeout (ms)"
                step=50.0
                value={event.timeout}
                onChange=onTimeoutChange
              />
              <NumberField
                min=1
                labelText="Repeat"
                value={event.repeat}
                onChange=onTimeoutChange
              />
            </>
          </Flex>
        </Flex>
        <Button
          className={saveButtonGet(styles)}
          style=Primary
          onClick={_event => ()}
          buttonText="Add event"
        />
      </div>
    </WhitePanel>
  </div>;
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