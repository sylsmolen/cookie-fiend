open Utils;
let styles = requireCSS("./Button.css");

[@bs.deriving abstract]
type style = {
  primary: string,
  secondary: string,
  inverted: string,
  cancel: string,
};

type buttonStyle =
  | Primary
  | Secondary
  | Inverted
  | Cancel;

[@react.component]
let make = (~style: buttonStyle, ~buttonText: string, ~onClick) => {
  let className =
    switch (style) {
    | Primary => primaryGet(styles)
    | Secondary => secondaryGet(styles)
    | Inverted => invertedGet(styles)
    | Cancel => cancelGet(styles)
    };

  <button className onClick> {ReasonReact.string(buttonText)} </button>;
};