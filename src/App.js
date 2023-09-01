// Import necessary libraries and components
import React from "react";
import Countdown from "react-countdown";
import HomePage from "./homePage";

// CSS for styling
import "./App.css"; // Make sure to create an appropriate CSS file

function App() {
  const weddingDate = new Date("2023-11-16T19:30:00");
  const brideName = "נפתלי";
  const groomName = "רחלי";

  // Renderer callback with custom styling
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return (
        <div className="countdown-container">
          <h1> Congratulations! </h1>
          <p> You are now married! </p>
        </div>
      );
    } else {
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      return (
        <div className="countdown-container">
          {/* <h1> Countdown to Our Wedding </h1> */}
          <div className="countdown-timer">
            {months ? (
              <div className="countdown-unit">
                <span className="countdown-value">{months}</span>
                <span className="countdown-label">
                  {" "}
                  {months > 1 ? "חודשים" : "חודש"}{" "}
                </span>
              </div>
            ) : null}
            {weeks ? (
              <div className="countdown-unit">
                <span className="countdown-value">{weeks}</span>
                <span className="countdown-label">
                  {" "}
                  {weeks > 1 ? "שבועות" : "שבוע"}{" "}
                </span>
              </div>
            ) : null}
            <div className="countdown-unit">
              <span className="countdown-value">{days}</span>
              <span className="countdown-label">
                {" "}
                {days !== 1 ? "ימים" : "יום"}{" "}
              </span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-value">{hours}</span>
              <span className="countdown-label">
                {" "}
                {hours !== 1 ? "שעות" : "שעה"}{" "}
              </span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-value">{minutes}</span>
              <span className="countdown-label">
                {" "}
                {minutes !== 1 ? "דקות" : "דקה"}{" "}
              </span>
            </div>
            <div className="countdown-unit">
              <span className="countdown-value">{seconds}</span>
              <span className="countdown-label">
                {" "}
                {seconds !== 1 ? "שניות" : "שניה"}{" "}
              </span>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="appDiv">
      <HomePage weddingDate={weddingDate} brideName={brideName} groomName={groomName}/>
      <Countdown date={weddingDate} renderer={renderer} />
    </div>
  );
}

export default App;
