import styles from './styles/app.module.css';
import Events from './Events/createEvents';

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
      <section className={styles.CalendarBarSection}>
        <div className={styles.CalendarBar}>
          <Events />
        </div>
      </section>
    </div >
  );
}

export default App;
