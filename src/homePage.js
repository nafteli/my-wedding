import React, { useState, useEffect } from "react";
import { toJewishDate, formatJewishDateInHebrew } from "jewish-date";
import "./css/homePage.css";

import saveToCalendar from "./saveButton";

const HomePage = ({ brideName, groomName, weddingDate, Wedding }) => {
  const [today, setToday] = useState(false);
  const [now, setNow] = useState(false);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    checkTime();
  });
  const checkTime = () => {
    const weddingDateNumber = weddingDate[Symbol.toPrimitive]("number");
    const dateTimeMilliseconds = 12 * 60 * 60 * 1000; // 12 שעות לפני תחילת חתונה
    const finishedDateTimeMilliseconds = 4.5 * 60 * 60 * 1000 // 4.5 שעות חתונה 
    console.log(weddingDateNumber - Date.now() < dateTimeMilliseconds);
    if (weddingDateNumber - Date.now() <= dateTimeMilliseconds) {
      setToday(true);
    }
    if (weddingDateNumber - Date.now() <= 0) {
      setNow(true);
    }
    if (weddingDateNumber - Date.now() <= -finishedDateTimeMilliseconds) {
      setFinished(true);
    }
  };
  setInterval(checkTime, 60000);
  const jewishDate = toJewishDate(weddingDate);
  const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
  return (
    <div className="homepage" onClick={() => saveToCalendar(Wedding)}>
      <header className="header">
        {/* <h1>החתונה של</h1> */}
        <h2>
          {groomName} & {brideName}
        </h2>
        {finished ? (
          <h1>נגמר כבר אין מה לחפש פה</h1>
        ) : (
          <div>
            {today ? (
              now ? (
                <h1> עכשיו </h1>
              ) : (
                <h1> היום </h1>
              )
            ) : (
              <p>שמרו את התאריך</p>
            )}
            <p className="date">
              {" "}
              {jewishDateInHebrewStr} -{" "}
              {weddingDate.toJSON().split("T")[0].replaceAll("-", "/")}
            </p>
          </div>
        )}
      </header>
    </div>
  );
};

export default HomePage;
