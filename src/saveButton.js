import React from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const SaveTheDate = ({weddingDate}) => {
  console.log(weddingDate.toJSON().split('T')[0], weddingDate.toJSON().split('T')[1].slice(0, 5));
  const saveToCalendar = () => {
    console.log(navigator.userAgent);
    window.open(
    );
  };
  return (
    <div className="saveButton">
      <button onClick={saveToCalendar}>שמרו את התאריך</button>
    </div>
  );
};

export default SaveTheDate;
