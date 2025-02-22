import { create } from 'zustand';

type invitationState = {
  title: string | null;
  description: string;
  taskRequestDto: {
    majorCategoryId: number | null;
    minorCategoryId: number | null;
    penaltyId: number;
    name: string;
    nickname: string;
    penaltyName: string;
  };
  endTime: null | Date;

  setNickname: (nickname: string) => void;
  setMajorCategoryId: (category: number | null) => void;
  setMinorCategoryId: (category: number | null) => void;
  setTitle: (title: string | null) => void;
};

const useInvitationStore = create<invitationState>(set => ({
  title: null,
  description: '',
  taskRequestDto: {
    majorCategoryId: null,
    minorCategoryId: null,
    penaltyId: 0,
    name: '',
    nickname: '',
    penaltyName: '',
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
}));

export default useInvitationStore;
