import { create } from "zustand";

interface PatientsStore {
  patientsData: any; // TODO: Replace `any` with actual type later
  setPatientsData: (data: any) => void; // TODO: Replace `any` with the actual type of your patients data later
}

export const useStore = create<PatientsStore>((set) => ({
  patientsData: null,
  setPatientsData: (data) => set({ patientsData: data }),
}));

export default useStore;
