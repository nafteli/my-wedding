// import React from "react";
import { atcb_action } from "add-to-calendar-button";

export const saveToCalendar = (Wedding) => {
  atcb_action({
    name: Wedding.name,
    description: Wedding.description,
    startDate: `${Wedding.startDate}`,
    endDate: `${Wedding.startDate}`,
    startTime: `${Wedding.startTime}`,
    endTime: `${Wedding.endTime}`,
    location:Wedding.location,
    options: ["Google"],
    timeZone: "Asia/Jerusalem"
  });
};

export default saveToCalendar;
