open Utils;

[@bs.deriving abstract]
type style = {
  form: string,
  saveButton: string,
};

let styles: style = requireCSS("./PluginForm.css");

type action =
  | SelectScope(Settings.scope)
  | SetTimetout(int);

type state = {
  scope: Settings.scope,
  timeout: int,
};

let initialState: state = {scope: Settings.URL, timeout: 0};

[@react.component]
let make = () => {
  let (state, dispatch) =
    React.useReducer(
      (state, action) =>
        switch (action) {
        | SelectScope(scope) => {...state, scope}
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
          disabledOptions=[Settings.Origin]
          getOptionValue=Settings.getScopeValue
          value={state.scope}
          onChange={event => dispatch(SelectScope(ReactEvent.Form.target(event)##value))}
        />
        <TextField labelText="Inputs label" />
        <p> {ReasonReact.string("Selected option: " ++ Settings.getScopeValue(state.scope))} </p>
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