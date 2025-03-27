"use client";

import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
  DatesSetArg,
} from "@fullcalendar/core";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month View
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day View
import interactionPlugin from "@fullcalendar/interaction"; // Enables date selection

import Clock from "@/components/ui/Clock";
import PatientsList from "@/components/patients/PatientsList";

const SchedulePage = () => {
  const handleDateSelect = (selectInfo: DatesSetArg) => {
    alert(`Selected date: ${selectInfo.startStr}`);
    // You can open a modal here to add an event
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'?`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  return (
    <>
      <main className="flex flex-1 h-screen overflow-hidden">
        {/* Mobile View */}
        <div className="flex flex-col gap-5 w-full xl:hidden bg-unnamed-color-ffffff p-5">
          <Clock className="p-0" />

          <div className="flex flex-col flex-1">
            <h3 className="font-manrope font-extrabold text-xl leading-8 text-unnamed-color-072635">
              Schedule
            </h3>

            <div className="grid place-items-center flex-1">
              You have no schedule on your calendar.
            </div>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden xl:grid grid-cols-12 gap-10 w-full">
          <div className="col-span-8 flex flex-col gap-y-10 h-full overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635 text-center">
              Calendar
            </h3>

            <div className="overflow-auto flex-1">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                events={[
                  { title: "Event 1", date: "2025-03-26" },
                  { title: "Event 2", date: "2025-03-29" },
                ]}
                eventClick={handleEventClick}
              />
            </div>
          </div>

          <div className="flex flex-col col-span-4 overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635">
              Upcoming Schedule
            </h3>

            <div className="grid place-items-center flex-1">
              You have no schedule on your calendar.
            </div>
          </div>

          {/* <div className="col-span-3 overflow-hidden rounded-2xl">
            <Clock />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default SchedulePage;
