import React from "react";
import Countdown from "react-countdown";
import "./css/countdown.css"

const CountDown = ({ weddingDate, brideName, groomName }) => {
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
                <span className="countdown-value">{weeks - months * 4}</span>
                <span className="countdown-label">
                  {" "}
                  {weeks > 1 ? "שבועות" : "שבוע"}{" "}
                </span>
              </div>
            ) : null}
            <div className="countdown-unit">
              <span className="countdown-value">{days - weeks * 7}</span>
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
    <Countdown date={weddingDate} renderer={renderer} />
  )
};

export default CountDown;
