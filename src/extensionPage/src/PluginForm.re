open Utils;

[@bs.deriving abstract]
type style = {
  form: string,
  saveButton: string,
};

let styles: style = requireCSS("./PluginForm.css");

type action =
  | SetTimetout(int)
  | SelectScope(string)
  | SelectEvent(string)
  | SetEventName(string)
  | SelectSelectorType(string)
  | SetSelector(string)
  | Save;

type state = {
  isSaved: bool,
  selectorType: string,
  selector: string,
  scope: string,
  event: string,
  eventName: string,
  timeout: int,
};

let initialState: state = {
  isSaved: false,
  eventName: "",
  selectorType: Settings.selector_css,
  selector: "",
  scope: Settings.scope_url,
  event: Settings.event_style,
  timeout: 0,
};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | Save => {...state, isSaved: true}
        | SelectScope(scope) => {...state, isSaved: false, scope}
        | SelectEvent(event) => {...state, isSaved: false, event}
        | SetTimetout(timeout) => {...state, isSaved: false, timeout}
        | SetEventName(eventName) => {...state, isSaved: false, eventName}
        | SelectSelectorType(selectorType) => {...state, isSaved: false, selectorType}
        | SetSelector(selector) => {...state, isSaved: false, selector}
        },
      initialState,
    );

  <div>
    <h1> {ReasonReact.string("Add plugin")} </h1>
    <WhitePanel>
      <Flex style=[Column, AlignItemsFlexStart] className={formGet(styles)}>
        <SelectField
          labelText="Scope"
          options=Settings.scope
          disabledOptions=[Settings.scope_browser]
          value={state.scope}
          onChange={value => dispatch(SelectScope(value))}
        />
        <SelectField
          labelText="Event"
          options=Settings.event
          value={state.event}
          onChange={value => dispatch(SelectEvent(value))}
        />
        <SelectField
          labelText="Selector"
          options=Settings.selector
          disabledOptions=[Settings.selector_xpath]
          value={state.selectorType}
          onChange={value => dispatch(SelectSelectorType(value))}
        />
        <TextField
          labelText="Name"
          value={state.eventName}
          onChange={value => dispatch(SetEventName(value))}
        />
        <TextField
          labelText="Selector"
          value={state.selector}
          onChange={value => dispatch(SetSelector(value))}
        />
        {state.isSaved
           ? <>
               <p> {ReasonReact.string("Scope: " ++ state.scope)} </p>
               <p> {ReasonReact.string("Event: " ++ state.event)} </p>
               <p> {ReasonReact.string("Selector type: " ++ state.selectorType)} </p>
               <p> {ReasonReact.string("Selector: " ++ state.selector)} </p>
               <p> {ReasonReact.string("Event name: " ++ state.eventName)} </p>
             </>
           : ReasonReact.null}
        <Button
          className={saveButtonGet(styles)}
          style=Primary
          onClick={_event => dispatch(Save)}
          buttonText="save"
        />
      </Flex>
    </WhitePanel>
  </div>;
};

/*




  {
     "position": 0,
     "repeat": 0,
     "event": "style",
     "name": "cookie info box",
     "selector": "/html/body/div[3]/div[2]/div[1]/div[2]/h1",
     "selectorType": "XPATH",
     "condition":
     "timeout": 0,
     "mode": "on load",
     "modeParam": "#qcCmpUi",
     "value": {
       "background-color": "red"
     },
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