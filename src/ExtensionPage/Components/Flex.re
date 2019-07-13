open Utils;

[@bs.deriving abstract]
type style = {
  flex: string,
  column: string,
  row: string,
  justifyItemsFlexStart: string,
  justifyItemsFlexEnd: string,
  alignItemsFlexStart: string,
  alignItemsFlexEnd: string,
  justifyContentSpaceAround: string,
  justifyContentSpaceBetween: string,
};

let styles: style = requireCSS("./Flex.css");

type flexOptions =
  | Row
  | Column
  | JustifyItemsFlexStart
  | JustifyItemsFlexEnd
  | AlignItemsFlexStart
  | AlignItemsFlexEnd
  | JustifyContentSpaceAround
  | JustifyContentSpaceBetween;

[@react.component]
let make = (~children, ~style: list(flexOptions), ~className="") => {
  let baseClassNames = flexGet(styles) ++ " " ++ className;
  let flexClassName =
    List.fold_left(
      (acc, current) => {
        let currentClassName =
          switch (current) {
          | Row => rowGet(styles)
          | Column => columnGet(styles)
          | JustifyItemsFlexStart => justifyItemsFlexStartGet(styles)
          | JustifyItemsFlexEnd => justifyItemsFlexEndGet(styles)
          | AlignItemsFlexStart => alignItemsFlexStartGet(styles)
          | AlignItemsFlexEnd => alignItemsFlexEndGet(styles)
          | JustifyContentSpaceAround => justifyContentSpaceAroundGet(styles)
          | JustifyContentSpaceBetween => justifyContentSpaceBetweenGet(styles)
          };
        acc ++ " " ++ currentClassName;
      },
      baseClassNames,
      style,
    );

  <div className=flexClassName> children </div>;
};