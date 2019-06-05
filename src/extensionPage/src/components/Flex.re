open Utils;

[@bs.deriving abstract]
type style = {
  flex: string,
  column: string,
  justifyItemsFlexStart: string,
  justifyItemsFlexEnd: string,
  alignItemsFlexStart: string,
  alignItemsFlexEnd: string,
};

let styles: style = requireCSS("./Flex.css");

type flexOptions =
  | Column
  | JustifyItemsFlexStart
  | JustifyItemsFlexEnd
  | AlignItemsFlexStart
  | AlignItemsFlexEnd;

[@react.component]
let make = (~children, ~style: list(flexOptions)) => {
  let className =
    List.fold_left(
      (acc, current) => {
        let currentClassName =
          switch (current) {
          | Column => columnGet(styles)
          | JustifyItemsFlexStart => justifyItemsFlexStartGet(styles)
          | JustifyItemsFlexEnd => justifyItemsFlexEndGet(styles)
          | AlignItemsFlexStart => alignItemsFlexStartGet(styles)
          | AlignItemsFlexEnd => alignItemsFlexEndGet(styles)
          };

        acc ++ " " ++ currentClassName;
      },
      flexGet(styles),
      style,
    );

  <div className> children </div>;
};