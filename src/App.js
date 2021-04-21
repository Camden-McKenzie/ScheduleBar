import styles from './styles/app.module.css';
import CalendarBar from './CalendarBar/CalendarBar';
import React, { useState } from 'react';
import EventData from "./CalendarBar/eventData"

function App() {

  const [eventList, setEventList] = useState([
    new EventData("Shopping", 10, "blue"),
    new EventData("Cleaning", 20, "green"),
    new EventData("Hello World", 20, "red")
  ]);

  const addEventStart = newEvent => {
    setEventList(currentEvents => [
      newEvent, ...currentEvents
    ]
    );
  };

  const addEventEnd = newEvent => {
    setEventList(currentEvents => [
      ...currentEvents,
      newEvent
    ]
    );
  };

  const updateEvent = (eventID, updatedEvent) => {
    setEventList(currentEvents => [
      ...currentEvents.slice(0, eventID), updatedEvent, ...currentEvents.slice(eventID + 1, currentEvents.length)
    ]);
  }

  const removeEvent = (eventID) => {
    setEventList(currentEvents => [
      ...currentEvents.slice(0, eventID), ...currentEvents.slice(eventID + 1, currentEvents.length)

    ])
  }



  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Schedule</h1>
      </header>
      <section>
        <div className={styles.Controls}>
          <input type="button" onClick={() => updateEvent(0, new EventData("Hello", 20, "green"))} value="Update" />
          <input type="button" onClick={() => addEventStart(new EventData("Sup", 10, "orange"))} value="Add" />
          <input type="button" onClick={() => removeEvent(0, new EventData("Hello", 20, "green"))} value="Remove" />
        </div>
      </section>
      <section className={styles.CalendarBarSection}>
        <div className={styles.CalendarBar}>
          <CalendarBar events={eventList} />
        </div>
      </section>
    </div >
  );
}

export default App;
