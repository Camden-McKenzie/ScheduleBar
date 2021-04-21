import Event from './Event'

/**
 * Display Events in a colorful bar
 * @function  CalendarBar
 * @param     {EventData[]}     events Array of events to be displayed in bar
 * @returns   {react.Component} Calender bar displaying Events
 */
function CalendarBar({ events }) {
  return (
    <>
      {/* Loop through event data and create the events */}
      {
        events.map(eventData => {
          return <Event
            message={eventData.message}
            width={eventData.width}
            color={eventData.color}
          />
        })
      }
    </>
  );
}

export default CalendarBar;
