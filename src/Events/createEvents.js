import React from 'react';

import Data from './getEventData'
import Event from './event'


export default class Events extends React.Component {

  state = {
    eventData: Data()
  }

  addEvent(message, width, color) {
    this.setState((state) => {
      return state.eventData.addEvent(message, width, color)
    });
  }

  render() {
    return (
      <>
        {/* Loop through event data and create the events */}
        {
          this.state.eventData.events.map(event => {
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
}