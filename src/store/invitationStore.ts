import { create } from 'zustand';

export type invitationState = {
  title: string | null;
  description: string | null;
  taskRequestDto: {
    majorCategoryId: number | null;
    minorCategoryId: number | null;
    penaltyId: number | null;
    name: string | null;
    nickname: string | null;
    penaltyName: string | null;
  };
  endTime: number | null;

  setNickname?: (nickname: string) => void;
  setMajorCategoryId?: (category: number | null) => void;
  setMinorCategoryId?: (category: number | null) => void;
  setTitle?: (title: string | null) => void;
  setEndTime?: (time: number | null) => void;
  setPenaltyId?: (id: number | null) => void;
  setPenaltyName?: (penalty: string | null) => void;
};

const useInvitationStore = create<invitationState>(set => ({
  title: null,
  description: null,
  taskRequestDto: {
    majorCategoryId: null,
    minorCategoryId: null,
    penaltyId: null,
    name: null,
    nickname: null,
    penaltyName: null,
  },
  endTime: null,

  setNickname: nickname =>
    set(state => ({
      taskRequestDto: {
        ...state.taskRequestDto,
        nickname,
      },
    })),

  setMajorCategoryId: id =>
    set(state => ({
      taskRequestDto: {
        ...state.taskRequestDto,
        majorCategoryId: id,
      },
    })),

  setMinorCategoryId: id =>
    set(state => ({
      taskRequestDto: {
        ...state.taskRequestDto,
        minorCategoryId: id,
      },
    })),

  setTitle: (title: string | null) => set({ title }),

  setEndTime: time => set({ endTime: time }),

  setPenaltyId: id =>
    set(state => ({
      taskRequestDto: {
        ...state.taskRequestDto,
        penaltyId: id,
      },
    })),

  setPenaltyName: penalty =>
    set(state => ({
      taskRequestDto: {
        ...state.taskRequestDto,
        penaltyName: penalty,
      },
    })),
}));

export default useInvitationStore;
