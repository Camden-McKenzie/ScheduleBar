
export default function Data() {
  const events = new EventData(
    [
      new Event("Shopping", 10, "blue"),
      new Event("Cleaning", 20, "green"),
      new Event("Hello World", 20, "red")
    ]
  )

  function addEvent(message, width, colors) {
    this.events.push(new Event(message, width, colors));
  }

  return events;

}


class EventData {
  constructor(events) {
    this.events = events;
  }
}

class Event {
  constructor(message, width, color) {
    this.message = message;
    this.width = width;
    this.color = color;
  }
}