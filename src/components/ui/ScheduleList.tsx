import React from "react";
import { useEventStore } from "@/store/useEventStore";

const ScheduleList = () => {
  const { events } = useEventStore();

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id} className="p-2 border-b">
          {event.date} - {event.title}
        </li>
      ))}
    </ul>
  );
};

export default ScheduleList;
