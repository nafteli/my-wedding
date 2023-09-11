import React from "react";
import {
    toJewishDate,
    formatJewishDateInHebrew,
  } from "jewish-date";import "./css/homePage.css"

import saveToCalendar from "./saveButton"

const HomePage = ({brideName, groomName, weddingDate, Wedding}) => {  
    const jewishDate = toJewishDate(weddingDate);
    const jewishDateInHebrewStr = formatJewishDateInHebrew(jewishDate);
    return (
      <div className="homepage" onClick={() => saveToCalendar(Wedding)}>
        <header className="header">
          {/* <h1>החתונה של</h1> */}
          <h2>{brideName} & {groomName}</h2>
          <p>שמרו את התאריך</p>
          <p className="date"> {jewishDateInHebrewStr} - {weddingDate.toJSON().split('T')[0]}</p>
        </header>
      </div>
    );
  }

  export default HomePage