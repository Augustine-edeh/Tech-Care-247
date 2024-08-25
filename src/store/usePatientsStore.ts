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

export const usePatientsStore = create<PatientsState>((set) => ({
  patients: [],
  selectedPatient: null,
  isLoading: false,
  error: null,
  timeRange: "Last 6 months",
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
  setSelectedPatient: (patient: PatientDataType) =>
    set({ selectedPatient: patient }),
  setTimeRange: (range: string) => set({ timeRange: range }),
}));

export default usePatientsStore;
