import React from "react";

const SaveTheDate = ({weddingDate}) => {
  const saveToCalendar = () => {
    window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NzFqMzhlMzRjZ3JqaWI5b2M5aTNhYjlrYzlpajBiYjJja3AzMmI5bTZ0aTZjZHBoNjVoNjJlYjY2cyBuYWZ0YWxpMjA1NUBt&tmsrc=naftali2055%40gmail.com");
  };
  return (
    <div className="saveButton">
      <button onClick={saveToCalendar}>שמרו את התאריך</button>
    </div>
  );
};

export default SaveTheDate;
