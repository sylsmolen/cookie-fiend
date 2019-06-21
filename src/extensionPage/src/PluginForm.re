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
  | SelectEvent(string);

type state = {
  scope: string,
  event: string,
  timeout: int,
};

let initialState: state = {scope: Settings.scope_url, event: Settings.event_style, timeout: 0};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | SelectScope(scope) => {...state, scope}
        | SelectEvent(event) => {...state, event}
        | SetTimetout(time) => {...state, timeout: time}
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
        <TextField labelText="Inputs label" />
        <p> {ReasonReact.string("Selected option: " ++ state.scope)} </p>
        <p> {ReasonReact.string("Selected option: " ++ state.event)} </p>
        <Button
          className={saveButtonGet(styles)}
          style=Primary
          onClick={_event => ()}
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