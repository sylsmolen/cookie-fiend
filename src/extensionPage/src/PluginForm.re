open Utils;

/*
 [@bs.deriving abstract]
 type style = {testStyle: string};
 let styles: style = requireCSS("./PluginForm.css");

 Js.log(testStyleGet(styles));
   <option> {ReasonReact.string("Current URL")} </option>
        <option disabled=true> {ReasonReact.string("Current origin")} </option>
      </SelectField>
 */

[@react.component]
let make = () => {
  <div>
    <h1> {ReasonReact.string("Add plugin")} </h1>
    <WhitePanel>
      <SelectField labelText="Scope" options=[|"Current URL", "Current origin"|] />
      <TextField labelText="Input label" />
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