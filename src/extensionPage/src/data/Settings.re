type scope =
  | URL
  | Origin;

let scope = [|URL, Origin|];

let getScopeValue = var =>
  switch (var) {
  | URL => "Current URL"
  | Origin => "Current origin"
  };

// let scope = [|"Current URL", "Current origin"|];

/*

 const SELECTOR_TYPES = {
   XPATH: 'X_PATH',
   CSS: 'CSS'
 }

 const CONDITIONS = {
   EQUALS: 'EQUALS',
   NOT_EQUALS: 'NOT_EQUALS',
   INCLUDES: 'INCLUDES'
 }

 const EVENTS = {
   CLICK: 'CLICK',
   STYLE: 'CTYLE'
 }

 const EXECUTION_MODE = {
   ONCE: 'ONCE',
   INTERVAL: 'INTERVAL',
   ON_LOAD: 'ON_LOAD'
 }

 */