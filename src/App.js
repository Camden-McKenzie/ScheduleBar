import logo from './logo.svg';
import styles from './styles/app.module.css';

function App() {

  const eventStyle = (width, color) => ({
    width: `${width}px`,
    height: `100%`,
    backgroundColor: color ? color : `#1DA1F2`,
    color: 'white',
  });

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Schedule</h1>
      </header>
      <section>
        <div className={styles.Controls}>

        </div>
      </section>
      <section>
        <div className={styles.Calendar}>
          <button className={styles.Event} style={eventStyle(200)}> Wake up </button>
          <button className={styles.Event} style={eventStyle(400, "#ff7a7a")} > Shopping </button>
          <button className={styles.Event} style={eventStyle(400, "#83c77b")} > Cleaning </button>
        </div>
      </section>
    </div >
  );
}

export default App;
