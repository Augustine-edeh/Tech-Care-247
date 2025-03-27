"use client";

import { useState } from "react";

import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
  DatesSetArg,
} from "@fullcalendar/core";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Clock from "@/components/ui/Clock";

const SchedulePage = () => {
  const [events, setEvents] = useState([
    { id: "1", title: "Event 1", date: "2025-03-26" },
    { id: "2", title: "Event 2", date: "2025-03-29" },
  ]);

  const [selectedEvent, setSelectedEvent] = useState<EventClickArg | null>(
    null
  );

  const handleEventClick = (clickInfo: EventClickArg) => {
    setSelectedEvent(clickInfo);
  };

  const confirmDelete = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== selectedEvent.event.id)
      );
      selectedEvent.event.remove(); // Ensure FullCalendar updates
    }
    setSelectedEvent(null);
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

      {/* ShadCN Dialog for Confirm Delete */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => setSelectedEvent(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete "{selectedEvent?.event.title}"?</p>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setSelectedEvent(null)}
              className="bg-green-500 text-white hover:bg-green-600"
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Yes, Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SchedulePage;
