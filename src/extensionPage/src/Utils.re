[@bs.val] external requireCSS: string => 'styleType = "require";

let getFormEventValue = event => ReactEvent.Form.target(event)##value;