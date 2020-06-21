open Utils;

type event = {
  id: int,
  position: int,
  selectorType: string,
  selector: string,
  mode: string,
  modeValue: string,
  eventType: string,
  name: string,
  eventValue: string,
  timeout: int,
  repeat: int,
};

type pluginDetails = {
  scope: string,
  name: string,
  url: string,
};

type action =
  | AddEvent
  | RemoveEvent(int)
  | MoveEventUp
  | MoveEventDown
  | SetTimeout(int, int)
  | SelectEventType(int, string)
  | SetEventName(int, string)
  | SelectSelectorType(int, string)
  | SetSelector(int, string)
  | SetRepeat(int, int)
  | SetEventValue(int, string)
  | SelectMode(int, string)
  | SetModeValue(int, string)
  | ReceiveTabs(Tabs.tabs)
  | TabQueryError
  | SelectScope(string)
  | SetUrl(string)
  | SetPluginName(string);

let blankEvent: event = {
  position: 0,
  name: "",
  mode: Settings.mode_once,
  modeValue: "",
  selectorType: Settings.selector_css,
  selector: "",
  eventValue: "",
  eventType: Settings.event_style,
  timeout: 0,
  repeat: 1,
  id: 0,
};

type eventMap = IntMap.t(event);
let emptyEventMap = IntMap.empty;

type state = {
  pluginDetails,
  events: eventMap,
  tabs: Tabs.tabs,
  tabQueryError: bool,
};

let get = (state, action) =>
  switch (action) {
  | ReceiveTabs(tabs) => {...state, tabs}
  | TabQueryError => {...state, tabQueryError: true}
  | AddEvent =>
    let newIndex = getLastIntMapIndex(state.events) + 1;
    let events = IntMap.add(newIndex, {...blankEvent, id: newIndex}, state.events);
    {...state, events};
  | RemoveEvent(id) => IntMap.cardinal(state.events) !== 1 ? {...state, events: IntMap.remove(id, state.events)} : state
  | MoveEventUp => state
  | MoveEventDown => state
  | SetUrl(url) => {
      ...state,
      pluginDetails: {
        ...state.pluginDetails,
        url,
      },
    }
  | SelectScope(scope) => {
      ...state,
      pluginDetails: {
        ...state.pluginDetails,
        scope,
      },
    }
  | SetPluginName(name) => {
      ...state,
      pluginDetails: {
        ...state.pluginDetails,
        name,
      },
    }
  | SelectMode(id, mode) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), mode}, state.events);
    {...state, events};
  | SelectEventType(id, eventType) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), eventType}, state.events);
    {...state, events};
  | SetTimeout(id, timeout) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), timeout}, state.events);
    {...state, events};
  | SetEventName(id, name) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), name}, state.events);
    {...state, events};
  | SelectSelectorType(id, selectorType) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), selectorType}, state.events);
    {...state, events};
  | SetSelector(id, selector) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), selector}, state.events);
    {...state, events};
  | SetRepeat(id, repeat) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), repeat}, state.events);
    {...state, events};
  | SetEventValue(id, eventValue) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), eventValue}, state.events);
    {...state, events};
  | SetModeValue(id, modeValue) =>
    let events = IntMap.add(id, {...IntMap.find(id, state.events), modeValue}, state.events);
    {...state, events};
  };
