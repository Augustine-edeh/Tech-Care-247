import { create } from "zustand";

interface ActiveTabState {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const useActiveTabStore = create<ActiveTabState>((set) => ({
  activeTab: "patients", // Default tab
  setActiveTab: (tab: string) => set({ activeTab: tab }),
}));

export default useActiveTabStore;
