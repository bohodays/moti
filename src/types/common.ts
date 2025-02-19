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
};
