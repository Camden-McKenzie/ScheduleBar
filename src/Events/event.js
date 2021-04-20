import styles from './styles/event.module.css';

const DEFAULT_COLOR = `#1DA1F2`;
const DEFAULT_WIDTH = 20;

/**
 * Display an event on a CalendarBar
 * @function Event
 * @param   {string}          message Message displayed on the event
 * @param   {int}             width Width (in pixels)
 * @param   {color}           color Background color
 * @return  {react.Component} Event to be displayed within a CalenderBar
 */
export default function Event({ message, width = DEFAULT_WIDTH, color = DEFAULT_COLOR }) {

  const eventStyle = () => ({
    width: `${width}%`,
    backgroundColor: color,
  });

  return (
    // "className" applies universal styles & "style" applies unique styles
    <button className={styles.Event} style={eventStyle()}> {message} </button>
  );
}