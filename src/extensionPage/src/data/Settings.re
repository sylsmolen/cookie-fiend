type scope =
  | URL
  | Origin;

let scope = [|URL, Origin|];

let getScopeValue = var =>
  switch (var) {
  | URL => "Current URL"
  | Origin => "Current origin"
  };

type event =
  | Click
  | Style;

let event = [|Click, Style|];

let getEventValue = var =>
  switch (var) {
  | Click => "Click"
  | Style => "Style"
  };

type executionMode =
  | Once
  | Interval
  | OnLoad;

let executionMode = [|Once, Interval, OnLoad|];

let getExecutionModeValue = var =>
  switch (var) {
  | Once => "Once"
  | Interval => "Interval"
  | OnLoad => "On load"
  };

type selectorType =
  | XPath
  | CSS;

let selectorType = [|CSS, XPath|];

let getSelectorTypeValue = var =>
  switch (var) {
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