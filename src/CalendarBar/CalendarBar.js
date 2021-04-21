import Event from './Event'

function CalendarBar({ events }) {
  return (
    <>
      {/* Loop through event data and create the events */}
      {
        events.map(event => {
          return <Event
            message={event.message}
            width={event.width}
            color={event.color}
          />
        })
      }
    </>
  );
}


export default CalendarBar;
