import { create } from "zustand";
import { fetchPatientData } from "@/services/patientsService";
import { PatientDataType } from "../../types/Patient";

interface PatientsState {
  patients: PatientDataType[];
  selectedPatient: PatientDataType | null;
  isLoading: boolean;
  error: string | null;
  timeRange: string;
  fetchPatientsData: () => Promise<void>;
  setPatientsData: (data: PatientDataType[]) => void;
  setSelectedPatient: (patient: PatientDataType) => void;
  setTimeRange: (range: string) => void;
}

export const usePatientsStore = create<PatientsState>((set, get) => ({
  patients: [],
  selectedPatient: null,
  isLoading: false,
  error: null,
  timeRange: "6",

  // Fetches patient data and stores it in the state
  fetchPatientsData: async () => {
    const { patients } = get();
    // Avoid re-fetching if data already exists
    if (patients.length > 0) return;

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

  // Manually sets patient data
  setPatientsData: (data) => {
    set({ patients: data });
  },

  // Sets the currently selected patient
  setSelectedPatient: (patient: PatientDataType) => {
    set({ selectedPatient: patient });
  },

  // Updates the time range for filtering or charting
  setTimeRange: (range: string) => {
    set({ timeRange: range });
  },
}));

export default usePatientsStore;
