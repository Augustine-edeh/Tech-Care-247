"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import Clock from "@/components/ui/Clock";
import AddEventDialog from "@/components/AddEventDialog";
import DeleteEventDialog from "@/components/DeleteEventDialog";
import { useEventStore } from "../../../../store/useEventStore";

const SchedulePage = () => {
  const { events, selectEvent, setSelectedDate } = useEventStore();

  const handleEventClick = (clickInfo: EventClickArg) => {
    selectEvent({
      id: clickInfo.event.id,
      title: clickInfo.event.title,
      date: clickInfo.event.startStr,
    });
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    setSelectedDate(selectInfo.startStr);
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
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                select={handleDateSelect}
                eventClick={handleEventClick}
                events={events}
              />
            </div>
          </div>

          <div className="flex flex-col col-span-4 overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635">
              Upcoming Schedule
            </h3>

            <div className="grid place-items-center flex-1">
              {events.length === 0 ? (
                "You have no schedule on your calendar."
              ) : (
                <ul>
                  {events.map((event) => (
                    <li key={event.id} className="p-2 border-b">
                      {event.date} - {event.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Modals */}
      <AddEventDialog />
      <DeleteEventDialog />
    </>
  );
};

export default SchedulePage;
