import React, { useEffect, useState } from 'react';
import { ButtonProps } from 'src/types/common';

const Button = ({ text, onClick, customWrapperClassName, customButtonClassName }: ButtonProps) => {
  const [buttonClassName, setButtonClassName] = useState(
    'block h-[58px] w-[85%] rounded-[50px] bg-mainGreenColor text-[18px] text-mainBgColor'
  );
  const [buttonWrapperClassName, setButtonWrapperClassName] = useState(
    'flex w-full flex-col items-center justify-center'
  );

  useEffect(() => {
    if (customWrapperClassName) setButtonWrapperClassName(prev => `${prev} ${customWrapperClassName}`);
    if (customButtonClassName) setButtonClassName(prev => `${prev} ${customButtonClassName}`);
  }, [customWrapperClassName, customButtonClassName]);

  return (
    <div className={buttonWrapperClassName}>
      <button className={buttonClassName} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
