import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import HomePage from "./homePage";
import CountDown from "./countdown";
import "./css/App.css";

function App() {
  let weddingDate = new Date("2023-11-29T19:30:00");
  let groomName = "רחלי";
  let brideName = "נפתלי";
  const startDate = `${weddingDate.getFullYear()}-${
    weddingDate.getMonth() + 1
  }-${weddingDate.getDate()}`;
  const startTime =
    `${weddingDate.getHours()}-${weddingDate.getMinutes()}`.replace("-", ":");
  const endTime = `${4 + +startTime.split(":")[0]}:${
    29 + +startTime.split(":")[1]
  }`;
  const Wedding = {
    name: `חתונה ${brideName} \u{1F48D} ${groomName}`,
    location: "עטרת פרידמן אלעד",
    startDate: startDate,
    endDate: startDate,
    startTime: startTime,
    endTime: endTime,
    label: "שמרו את התאריך",
    description: "מחכים לראות אתכם",
  };

  return (
    <div className="appDiv">
      <HomePage
        weddingDate={weddingDate}
        brideName={brideName}
        groomName={groomName}
        Wedding={Wedding}
      />
      <CountDown
        weddingDate={weddingDate}
        brideName={brideName}
        groomName={groomName}
      />
      <div className="buttonDiv">
        <AddToCalendarButton
          name={Wedding.name}
          location={Wedding.location}
          startDate={Wedding.startDate}
          endDate={Wedding.startDate}
          startTime={Wedding.startTime}
          endTime={Wedding.endTime}
          label={Wedding.label}
          description={Wedding.description}
          timeZone="Asia/Jerusalem"
          options="Google"
          buttonStyle="date"
          lightMode="bodyScheme"
        ></AddToCalendarButton>
      </div>
    </div>
  );
}

export default App;
