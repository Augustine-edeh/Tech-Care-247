import { create } from "zustand";
import { fetchPatientData } from "@/services/patientsService";
import { PatientDataType } from "../../types/Patient";

interface PatientsState {
  patients: PatientDataType[];
  isLoading: boolean;
  error: string | null;
  fetchPatientsData: () => Promise<void>;
  setPatientsData: (data: PatientDataType[]) => void;
}

export const usePatientsStore = create<PatientsState>((set) => ({
  patients: [],
  isLoading: false,
  error: null,
  fetchPatientsData: async () => {
    set({ isLoading: true });
    try {
      const patientsData = await fetchPatientData();
      set({
        patients: patientsData,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ isLoading: false, error: (error as Error).message });
    }
  },
  setPatientsData: (data) => {
    set({ patients: data });
  },
}));

export default usePatientsStore;
