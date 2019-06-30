open Utils;

type event = {
  id: int,
  position: int,
  selectorType: string,
  selector: string,
  mode: string,
  modeValue: string,
  scope: string,
  eventType: string,
  eventName: string,
  eventValue: string,
  timeout: int,
  repeat: int,
};

type action =
  | AddEvent
  | RemoveEvent(int)
  | MoveEventUp
  | MoveEventDown
  | SetTimetout((int, int))
  | SelectScope((int, string))
  | SelectEventType((int, string))
  | SetEventName((int, string))
  | SelectSelectorType((int, string))
  | SetSelector((int, string))
  | SetRepeat((int, int))
  | SetEventValue((int, string))
  | SelectMode((int, string))
  | SetModeValue((int, string));

let blankEvent: event = {
  position: 0,
  eventName: "",
  mode: Settings.mode_once,
  modeValue: "",
  selectorType: Settings.selector_css,
  selector: "",
  eventValue: "",
  scope: Settings.scope_url,
  eventType: Settings.event_style,
  timeout: 0,
  repeat: 1,
  id: 0,
};

type eventMap = IntMap.t(event);
let emptyEventMap = IntMap.empty;

type state = {events: eventMap};

let getReducer = (state, action) =>
  switch (action) {
  | AddEvent =>
    let newIndex = getLastIntMapIndex(state.events) + 1;
    let updatedEventMap = IntMap.add(newIndex, {...blankEvent, id: newIndex}, state.events);
    {events: updatedEventMap};
  | RemoveEvent(id) => {events: IntMap.remove(id, state.events)}
  | MoveEventUp => state
  | MoveEventDown => state
  | SelectScope((id, scope)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), scope}, state.events),
    }
  | SelectMode((id, mode)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), mode}, state.events),
    }
  | SelectEventType((id, eventType)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), eventType}, state.events),
    }
  | SetTimetout((id, timeout)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), timeout}, state.events),
    }
  | SetEventName((id, eventName)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), eventName}, state.events),
    }
  | SelectSelectorType((id, selectorType)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), selectorType}, state.events),
    }
  | SetSelector((id, selector)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), selector}, state.events),
    }
  | SetRepeat((id, repeat)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), repeat}, state.events),
    }
  | SetEventValue((id, eventValue)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), eventValue}, state.events),
    }
  | SetModeValue((id, modeValue)) => {
      events: IntMap.add(id, {...IntMap.find(id, state.events), modeValue}, state.events),
    }
  };