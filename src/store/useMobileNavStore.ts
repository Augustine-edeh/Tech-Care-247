import { create } from "zustand";

interface MobileNavState {
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const useMobileNavStore = create<MobileNavState>((set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export default useMobileNavStore;
