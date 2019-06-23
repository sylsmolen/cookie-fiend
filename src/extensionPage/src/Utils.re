[@bs.val] external requireCSS: string => 'styleType = "require";

let getFormEventValue = event => ReactEvent.Form.target(event)##value;

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