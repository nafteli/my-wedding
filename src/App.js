import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import HomePage from "./homePage";
import CountDown from "./countdown";
import "./css/App.css";

function App() {
  const weddingDate = new Date("2023-11-29T19:30:00");
  const startDate = `${weddingDate.getFullYear()}-${weddingDate.getMonth()+1}-${weddingDate.getDate()}`
  const startTime = `${weddingDate.getHours()}-${weddingDate.getMinutes()}`.replace("-",":")
  const endTime = `${4 + + startTime.split(":")[0]}:${startTime.split(":")[1]}`
  const brideName = "נפתלי";
  const groomName = "רחלי";

  return (
    <div className="appDiv">
      <HomePage
        weddingDate={weddingDate}
        brideName={brideName}
        groomName={groomName}
        startDate={startDate}
        startTime={startTime}
        endTime={endTime}
      />
      <CountDown
        weddingDate={weddingDate}
        brideName={brideName}
        groomName={groomName}
      />
      <AddToCalendarButton
        name={`חתונה ${brideName} \u{1F48D} ${groomName}`}
        options= "Google"
        location="עטרת פרידמן Rabbi Yehuda HaNassi St 55, El'ad, Israel"
        startDate={startDate}
        endDate={startDate}
        startTime={startTime}
        endTime={endTime}
        timeZone="Asia/Jerusalem"
        label="שמרו את התאריך"
        buttonStyle="date"
        lightMode="bodyScheme"
      ></AddToCalendarButton>
    </div>
  );
}

export default App;
