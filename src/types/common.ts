export type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  customWrapperClassName?: string;
  customButtonClassName?: string;
};

export type stepProps = {
  onNext: (step?: string) => void;
  uuid?: string;
};

export type majorCategory = {
  id: number;
  name: string;
};

export type minorCategory = {
  id: number;
  name: string;
};

export type invitationType = {
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
  durationMinutes: number | null;
};

export type rivalInvitationType = {
  majorCategoryId: number | null;
  minorCategoryId: number | null;
  penaltyId: number | null;
  name: string | null;
  nickname: string | null;
  penaltyName: string | null;
};
