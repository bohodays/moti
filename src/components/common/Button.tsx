import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from 'src/types/common';

const Button = ({ text, onClick, customWrapperClassName, customButtonClassName }: ButtonProps) => {
  return (
    <div className={twMerge('flex w-full flex-col items-center justify-center', customWrapperClassName)}>
      <button
        className={twMerge(
          'block h-[58px] w-[85%] rounded-[50px] bg-green500 text-[18px] text-gray700 transition duration-300 ease-linear',
          customButtonClassName
        )}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
