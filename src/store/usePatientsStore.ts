import { create } from "zustand";

export const useStore = create((set) => ({
  patientsData: null,
  setPatientsData: (data) => set({ patientsData: data }),
}));

export default useStore;
