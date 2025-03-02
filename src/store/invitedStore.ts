import { create } from 'zustand';

export type invitedState = {
  myNickname: string | null;
  myMinorCategory: string | null;
  myMinorCategoryId: number | null;
  uuid: string | null;
  title: string | null;
  description: string | null;
  invitationTasks: [
    {
      name: string | null;
      nickname: string | null;
      majorCategory: {
        id: number | null;
        name: string | null;
      };
      minorCategory: {
        id: number | null;
        name: string | null;
      };
      penalty: {
        id: number | null;
        name: string | null;
        description: string | null;
        isSecret: boolean | null;
      };
      certificationPhoto: null;
    },
  ];
  startTime: string | null;
  endTime: string | null;
  status: string | null;

  setInvitationInfo: (
    info: Omit<invitedState, 'setInvitationInfo | setNickname | setMyMinorCategory | setMyMinorCategoryId'>
  ) => void;
  setMyNickname: (name: string | null) => void;
  setMyMinorCategory: (name: string | null) => void;
  setMyMinorCategoryId: (id: number | null) => void;
};

const useInvitedStore = create<invitedState>(set => ({
  myNickname: null,
  myMinorCategory: null,
  myMinorCategoryId: null,
  uuid: null,
  title: null,
  description: null,
  invitationTasks: [
    {
      name: null,
      nickname: null,
      majorCategory: {
        id: null,
        name: null,
      },
      minorCategory: {
        id: null,
        name: null,
      },
      penalty: {
        id: null,
        name: null,
        description: null,
        isSecret: null,
      },
      certificationPhoto: null,
    },
  ],
  startTime: null,
  endTime: null,
  status: null,

  setInvitationInfo: info => {
    set({
      uuid: info.uuid,
      title: info.title,
      description: info.description,
      invitationTasks: info.invitationTasks,
      startTime: info.startTime,
      endTime: info.endTime,
      status: info.status,
    });
  },

  setMyNickname: name => set({ myNickname: name }),

  setMyMinorCategory: category => set({ myMinorCategory: category }),

  setMyMinorCategoryId: id => set({ myMinorCategoryId: id }),
}));

export default useInvitedStore;
