import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeParts = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).formatToParts(dateTime);
  const time = Object.fromEntries(timeParts.map(({ type, value }) => [type, value]));
  const date = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(dateTime);

  return (
    <div className="app">
      <div className="clock-card">
        <div className="eyebrow">
          <span className="live-indicator" aria-hidden="true" />
          YOUR LOCAL TIME
        </div>
        <h1>Good to see you.</h1>
        <p className="intro">A little moment, right where you are.</p>

        <div className="clock" role="timer" aria-label={dateTime.toLocaleTimeString()}>
          <span className="time">{time.hour}:{time.minute}</span>
          <span className="seconds">{time.second}</span>
          <span className="period">{time.dayPeriod}</span>
        </div>

        <div className="date-row">
          <span className="calendar-icon" aria-hidden="true">▦</span>
          <time dateTime={dateTime.toISOString()}>{date}</time>
        </div>

        <div className="card-footer">
          <span className="footer-line" />
          <span>MAKE THIS MOMENT COUNT</span>
          <span className="footer-line" />
        </div>
      </div>
      <p className="credit">by 246m1a4225</p>
    </div>
  );
}

export default App;