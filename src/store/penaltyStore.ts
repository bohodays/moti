import { create } from 'zustand';

type penalyState = {
  endTime: number[];
  setTime: (time: number[]) => void;
  penalty: string;
  setPenalty: (penalty: string) => void;
};

const usePenaltyStore = create<penalyState>(set => ({
  endTime: [],
  setTime: (time: number[]) => set({ endTime: time }),
  penalty: '',
  setPenalty: (penalty: string) => set({ penalty }),
}));

export default usePenaltyStore;
