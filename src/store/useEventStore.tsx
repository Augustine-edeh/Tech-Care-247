import { create } from "zustand";

interface Event {
  id: string;
  title: string;
  date: string;
}

interface EventStore {
  showWeekends: boolean;
  toggleWeekends: () => void;
  events: Event[];
  selectedEvent: Event | null;
  selectedDate: string | null;
  isAddDialogOpen: boolean;
  isDeleteDialogOpen: boolean;
  addEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
  selectEvent: (event: Event | null) => void;
  setSelectedDate: (date: string | null) => void;
  openAddDialog: () => void;
  closeAddDialog: () => void;
  openDeleteDialog: () => void;
  closeDeleteDialog: () => void;
}

export const useEventStore = create<EventStore>((set) => ({
  showWeekends: true,
  toggleWeekends: () => set((state) => ({ showWeekends: !state.showWeekends })),
  events: [
    { id: "1", title: "Consultation - Emily Williams", date: "2025-03-26" },
    { id: "2", title: "Post-surgery review", date: "2025-03-29" },
  ],
  selectedEvent: null,
  selectedDate: null,
  isAddDialogOpen: false,
  isDeleteDialogOpen: false,
  addEvent: (event) => set((state) => ({ events: [...state.events, event] })),
  removeEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
      selectedEvent: null,
    })),
  selectEvent: (event) =>
    set(() => ({ selectedEvent: event, isDeleteDialogOpen: !!event })),
  setSelectedDate: (date) =>
    set(() => ({ selectedDate: date, isAddDialogOpen: !!date })),
  openAddDialog: () => set(() => ({ isAddDialogOpen: true })),
  closeAddDialog: () =>
    set(() => ({ isAddDialogOpen: false, selectedDate: null })),
  openDeleteDialog: () => set(() => ({ isDeleteDialogOpen: true })),
  closeDeleteDialog: () =>
    set(() => ({ isDeleteDialogOpen: false, selectedEvent: null })),
}));
