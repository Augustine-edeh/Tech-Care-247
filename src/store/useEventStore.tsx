import { create } from "zustand";
import { EventApi } from "@fullcalendar/core";

type EventType = {
  id: string;
  title: string;
  date: string;
};

type EventStore = {
  events: EventType[];
  selectedEvent: EventApi | null;
  addEvent: (event: EventType) => void;
  removeEvent: (id: string) => void;
  selectEvent: (event: EventApi | null) => void;
};

export const useEventStore = create<EventStore>((set) => ({
  events: [
    { id: "1", title: "Event 1", date: "2025-03-26" },
    { id: "2", title: "Event 2", date: "2025-03-29" },
  ],
  selectedEvent: null,

  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),

  removeEvent: (id) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== id),
    })),

  selectEvent: (event) => set({ selectedEvent: event }),
}));
