[@bs.val] external requireCSS: string => 'styleType = "require";

let getFormEventValue = event => ReactEvent.Form.target(event)##value;

let callback = fn => {
  React.useCallback(fn);
};

module StringMap =
  Map.Make({
    type t = string;
    let compare = compare;
  });

module IntMap =
  Map.Make({
    type t = int;
    let compare = compare;
  });

let getLastIntMapIndex = map => {
  let maxBinding = IntMap.max_binding(map);
  fst(maxBinding);
};


type timerId;
[@bs.val] external setTimeout: ((. unit) => unit, int) => timerId = "setTimeout";


[@bs.val] external windowLocation: string = "window.location.href";
