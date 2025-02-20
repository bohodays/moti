import { create } from 'zustand';

type invitationState = {
  title: string;
  description: string;
  taskRequestDto: {
    majorCategoryId: number;
    minorCategoryId: number;
    penaltyId: number;
    name: string;
    nickname: string;
    penaltyName: string;
  };
  endTime: null | Date;

  setNickname: (nickname: string) => void;
};

const useInvitationStore = create<invitationState>(set => ({
  title: '',
  description: '',
  taskRequestDto: {
    majorCategoryId: 0,
    minorCategoryId: 0,
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
}));

export default useInvitationStore;
