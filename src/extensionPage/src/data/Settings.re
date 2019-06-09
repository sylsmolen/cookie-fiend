type scope =
  | URL
  | Origin;

let scope = [|URL, Origin|];

let getScopeValue = variant =>
  switch (variant) {
  | URL => "Current URL"
  | Origin => "Current origin"
  };

let getScopeVariant = value =>
  switch (value) {
  | "Current URL" => URL
  | "Current origin" => Origin
  | _ => URL
  };

type event =
  | Click
  | Style;

let event = [|Click, Style|];

let getEventValue = variant =>
  switch (variant) {
  | Click => "Click"
  | Style => "Style"
  };

let getEventVariant = value =>
  switch (value) {
  | "Click" => Click
  | "Style" => Style
  | _ => Style
  };

type executionMode =
  | Once
  | Interval
  | OnLoad;

let executionMode = [|Once, Interval, OnLoad|];

let getExecutionModeValue = variant =>
  switch (variant) {
  | Once => "Once"
  | Interval => "Interval"
  | OnLoad => "On load"
  };

type selectorType =
  | XPath
  | CSS;

let selectorType = [|CSS, XPath|];

let getSelectorTypeValue = variant =>
  switch (variant) {
  | CSS => "CSS"
  | XPath => "XPath"
  };

/*
 const CONDITIONS = {
   EQUALS: 'EQUALS',
   NOT_EQUALS: 'NOT_EQUALS',
   INCLUDES: 'INCLUDES'
 }
 */