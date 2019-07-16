open Utils;

[@bs.deriving abstract]
type tabQuery = {active: bool};

/*
 type dog = string;
 module Decode = {
   let dogs = json: array(dog) =>
     Json.Decode.(
       json |> field("message", array(string)) |> Array.map(_, dog => dog)
     );
 };

 Js.Promise.(
               Fetch.fetch("https://dog.ceo/api/breeds/list")
               |> then_(Fetch.Response.json)
               |> then_(json =>
                    json
                    |> Decode.dogs
                    |> (dogs => self.send(DogsFetched(dogs)))
                    |> resolve
                  )
               |> catch(_err =>
                    Js.Promise.resolve(self.send(DogsFailedToFetch))
                  )
               |> ignore
             )

 */

let query = tabQuery(~active=true);

type tabQueryResult =
  | Success(array(PluginReducer.tab))
  | Failed(string);

type tabQueryPromise = Js.Promise.t(array(PluginReducer.tab)) => tabQueryResult;

[@bs.val] external queryTab: tabQuery => tabQueryPromise = "browser.tabs.query";

let res =
  Js.Promise.(
    queryTab(query)
    |> then_(value => Success(value))
    |> catch(err => Failed("Tab query failed"))
  );

[@bs.deriving abstract]
type style = {
  container: string,
  addEventBtn: string,
  btnContainer: string,
};

let styles: style = requireCSS("./PluginEditor.css");

let initialState: PluginReducer.state = {
  tabs: [||],
  events: IntMap.add(0, PluginReducer.blankEvent, IntMap.empty),
};

let callback = fn => {
  React.useCallback(fn);
};

React.memo(() => {
  let (state, dispatch) = React.useReducer(PluginReducer.get, initialState);
  let selectScope = callback((id, value) => dispatch(SelectScope((id, value))));
  let setTimetout = callback((id, value) => dispatch(SetTimetout((id, value))));
  let selectEventType = callback((id, value) => dispatch(SelectEventType((id, value))));
  let setEventName = callback((id, value) => dispatch(SetEventName((id, value))));
  let selectSelectorType = callback((id, value) => dispatch(SelectSelectorType((id, value))));
  let setSelector = callback((id, value) => dispatch(SetSelector((id, value))));
  let setRepeat = callback((id, value) => dispatch(SetRepeat((id, value))));
  let setEventValue = callback((id, value) => dispatch(SetEventValue((id, value))));
  let selectMode = callback((id, value) => dispatch(SelectMode((id, value))));
  let setModeValue = callback((id, value) => dispatch(SetModeValue((id, value))));
  let removeEvent = callback(id => dispatch(RemoveEvent(id)));

  [@react.component]
  let make =
    React.useEffect(() =>
      Js.Promise.(
        queryTab(query)
        |> then_(value => {
             dispatch(ReceivedTabQuery(value));
             resolve(value);
           })
        |> catch(err => resolve([||]))
      )
    );

  let eventList =
    Array.map(
      ((key: int, event: PluginReducer.event)) =>
        <Event
          key={string_of_int(key)}
          event
          selectScope
          setTimetout
          selectEventType
          setEventName
          selectSelectorType
          setSelector
          setRepeat
          setEventValue
          selectMode
          setModeValue
          removeEvent
        />,
      Array.of_list(IntMap.bindings(state.events)),
    );

  <div className={containerGet(styles)}>
    <h1> {ReasonReact.string("Create new plugin")} </h1>
    {ReasonReact.array(eventList)}
    <div className={btnContainerGet(styles)}>
      <Button
        className={addEventBtnGet(styles)}
        style=Primaryez
        onClick={_ => dispatch(AddEvent)}
        buttonText="Add event"
      />
    </div>
  </div>;
});