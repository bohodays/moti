import React, { useEffect, useState } from 'react';
import Input from '@components/common/Input';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import usePenaltyStore from '@store/penaltyStore';
import { stepProps } from 'src/types/common';

const PenaltySetting = ({ onNext }: stepProps) => {
  const { penalty, setPenalty } = usePenaltyStore();
  const [customPenalty, setCustomPenalty] = useState('');

  const onStepNext = () => {
    setPenalty(customPenalty);
    onNext('next');
  };

  useEffect(() => {
    setCustomPenalty(penalty);
  }, []);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[30px]">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="-translate-x-6 text-[32px] text-white">기억에 남을</div>
        <div className="text-[32px] text-white">
          벌칙을 정해주세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div className="w-full">
        <Input maxLength={40} value={customPenalty} onChange={e => setCustomPenalty(e.target.value)} />
        <button className="pl-6 pt-2 text-gray300" onClick={() => onNext('back')}>
          {'벌칙을 정해주세요 >'}
        </button>
      </div>

      <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 flex-col bg-yellow-400">
        <button className="bg-yellow-700" onClick={onStepNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default PenaltySetting;
