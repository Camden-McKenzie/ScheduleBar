import EventData from "./eventData"

export default class EventList {
  constructor(events) {
    this.events = events;
  }

  addEvent(message, width, colors) {
    this.events.push(new EventData(message, width, colors));
    return new EventList(this.events);
  }
}

