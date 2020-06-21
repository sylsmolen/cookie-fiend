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

type eventMap = IntMap.t(event);
