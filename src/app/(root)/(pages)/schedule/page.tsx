"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import Clock from "@/components/ui/Clock";
import AddEventDialog from "@/components/AddEventDialog";
import DeleteEventDialog from "@/components/DeleteEventDialog";
import { useEventStore } from "../../../../store/useEventStore";
import ScheduleList from "@/components/ui/ScheduleList";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const SchedulePage = () => {
  const { events, selectEvent, setSelectedDate } = useEventStore();

  const [showWeekends, setShowWeekends] = useState(true);

  const handleToggleWeekends = (checked: boolean) => {
    setShowWeekends(checked);
    console.log("Weekends visibility:", checked); // Testing weekend toggle feature
  };
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
          <div className="col-span-8 flex flex-col gap-y-5 h-full overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <section>
              <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635 text-center">
                Calendar
              </h3>

              <div className="flex gap-3 h-6 bg-red -600 justify-center items-center w-fit justify-self-center  ">
                <Checkbox
                  id="toggle-weekends"
                  checked={showWeekends}
                  onCheckedChange={handleToggleWeekends}
                />

                <label
                  htmlFor="toggle-weekends"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>
            </section>

            <div className="overflow-auto flex-1">
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={true}
                select={handleDateSelect}
                eventClick={handleEventClick}
                events={events}
                weekends={showWeekends}
                height="100%"
              />
            </div>
          </div>

          <div className="flex flex-col col-span-4 gap-5 overflow-hidden rounded-2xl bg-unnamed-color-ffffff p-5">
            <h3 className="font-manrope font-extrabold text-2xl leading-8 text-unnamed-color-072635">
              Upcoming Schedule
            </h3>

            <div className="flex-1 overflow-auto">
              {events.length === 0 ? (
                <p className="text-center">
                  You have no schedule on your calendar. <br /> Select a date on
                  the calendar to add a schedule/event.
                </p>
              ) : (
                <ScheduleList />
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
