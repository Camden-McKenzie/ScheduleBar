/** Helper class for Event */
export default class EventData {
  /**
   *
   * @param {String}  message
   * @param {Int}     width   A percentage of the calendar to fill
   * @param {Color}   color
   */
  constructor(message, width, color) {
    this.message = message;
    this.width = width;
    this.color = color;
  }
}