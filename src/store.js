import { create } from "zustand";

export const useStore = create((set, get) => ({
  play: true,
  setPlay: (play) => set({ play }),
  currentWine: null,
  setCurrentWine: (wine) => set({ currentWine: wine }),
  triggerBackgroundChange: () => {
    // This will be called when bottle color changes
    const event = new CustomEvent('backgroundColorChange');
    window.dispatchEvent(event);
  },
}));