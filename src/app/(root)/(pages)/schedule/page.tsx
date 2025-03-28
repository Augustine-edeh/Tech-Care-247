"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Clock from "@/components/ui/Clock";
import DeleteEventDialog from "@/components/DeleteEventDialog";
import { useEventStore } from "../../../../store/useEventStore";
import { EventClickArg } from "@fullcalendar/core";

const SchedulePage = () => {
  const { events, selectEvent } = useEventStore();

  const handleEventClick = (clickInfo: EventClickArg) => {
    selectEvent(clickInfo.event);
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
                events={events}
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
        </div>
      </main>

      {/* Delete Event Modal */}
      <DeleteEventDialog />
    </>
  );
};

export default SchedulePage;
