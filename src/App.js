import React from "react";
// import Countdown from "react-countdown";
import HomePage from "./homePage";
import CountDown from "./countdown";
import SaveTheDate from "./saveButton"

import "./css/App.css"; // Make sure to create an appropriate CSS file

function App() {
  const weddingDate = new Date("2023-11-16T19:30:00");
  const brideName = "נפתלי";
  const groomName = "רחלי";

  return (
    <div className="appDiv">
      <HomePage weddingDate={weddingDate} brideName={brideName} groomName={groomName}/>
      <CountDown weddingDate={weddingDate} brideName={brideName} groomName={groomName}/>
      <SaveTheDate weddingDate={weddingDate} />
    </div>
  );
}

export default App;
