import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExclamationMarkIcon, ExclamationMarkIcon2 } from '@components/Icons';

const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/match/active', {
        state: { type: 'invited' },
      });
    }, 4000);
  }, []);

  return (
    <div className="match-complete relative flex h-lvh flex-col items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <div className="text-[32px] text-white">
          좋아요 <ExclamationMarkIcon2 className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
        <div className="text-[32px] text-white">
          이제 대결을 시작할게요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Complete;
