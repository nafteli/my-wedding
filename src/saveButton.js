// import React from "react";
import { atcb_action } from "add-to-calendar-button";

export const saveToCalendar = (startDate, startTime, endTime, brideName, groomName) => {
  atcb_action({
    name: `חתונה ${brideName} \u{1F48D} ${groomName}`,
    description:
      "מחכים לראות אתכם",
    startDate: `${startDate}`,
    endDate: `${startDate}`,
    startTime: `${startTime}`,
    endTime: `${endTime}`,
    options: ["Google"],
    timeZone: "Asia/Jerusalem",
  });
};

export default saveToCalendar;
