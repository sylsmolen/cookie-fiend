open Utils;

let styles = requireCSS("Component1.module.css");

/* You're familiar handleClick from ReactJS. This mandatorily takes the payload,
   then the `self` record, which contains state (none here), `handle`, `reduce`
   and other utilities */

let handleClick = _event => Js.log(testStyleGet(styles));

/* `make` is the function that mandatorily takes `children` (if you want to use
   `JSX). `message` is a named argument, which simulates ReactJS props. Usage:

   `<Component1 message="hello" />`

   Which desugars to

   `ReasonReact.element(Component1.make(~message="hello", [||]))` */
[@react.component]
let make = (~message) =>
  <div className={testStyleGet(styles)} onClick=handleClick>
    {ReasonReact.string(message)}
  </div>;