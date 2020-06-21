open Utils;
open Event;

[@bs.deriving abstract]
type style = {
  form: string,
  panel: string,
  removeEventBtn: string,
  numberInputs: string,
};

let styles: style = requireCSS("./EventElement.css");

let callback = fn => {
  React.useCallback(fn);
};

[@react.component]
let make =
  React.memo(
    (
      ~event: event,
      ~removeEvent,
      ~setTimeout,
      ~selectEventType,
      ~setEventName,
      ~selectSelectorType,
      ~setSelector,
      ~setRepeat,
      ~setEventValue,
      ~selectMode,
      ~setModeValue,
    ) => {
    let onModeChange = callback(value => selectMode(event.id, value));
    let onModeValueChange = callback(value => setModeValue(event.id, value));
    let onEventTypeChange = callback(value => selectEventType(event.id, value));
    let onTimeoutChange = callback(value => setTimeout(event.id, value));
    let onEventNameChange = callback(value => setEventName(event.id, value));
    let onSetRepeat = callback(value => setRepeat(event.id, value));
    let onSelectSelectorType = callback(value => selectSelectorType(event.id, value));
    let onSetSelector = callback(value => setSelector(event.id, value));
    let onSetEventValue = callback(value => setEventValue(event.id, value));

    Js.log("rerender: " ++ string_of_int(event.id));
    <WhitePanel className={panelGet(styles)}>
      <div className={formGet(styles)}>
        <Flex style=[Row, JustifyContentSpaceBetween]>
          <SelectField
            labelText="Execution mode"
            options=Settings.mode
            value={event.mode}
            onChange=onModeChange
          />
          <TextField labelText="Mode value" value={event.modeValue} onChange=onModeValueChange />
          <SelectField
            labelText="Event type"
            options=Settings.event
            value={event.eventType}
            onChange=onEventTypeChange
          />
          <SelectField
            labelText="Selector"
            options=Settings.selector
            disabledOptions=[Settings.selector_xpath]
            value={event.selectorType}
            onChange=onSelectSelectorType
          />
          <TextField labelText="Event name" value={event.name} onChange=onEventNameChange />
          <TextField labelText="Event value" value={event.eventValue} onChange=onSetEventValue />
          <TextField labelText="Selector" value={event.selector} onChange=onSetSelector />
          <Flex style=[Row, JustifyContentSpaceBetween] className={numberInputsGet(styles)}>
            <>
              <NumberField
                labelText="Timeout (ms)"
                step=50.0
                value={event.timeout}
                onChange=onTimeoutChange
              />
              <NumberField min=1 labelText="Repeat" value={event.repeat} onChange=onSetRepeat />
            </>
          </Flex>
        </Flex>
      </div>
      <Button
        className={removeEventBtnGet(styles)}
        style=Cancel
        onClick={_e => removeEvent(event.id)}
        buttonText="Remove event"
      />
    </WhitePanel>;
  });
