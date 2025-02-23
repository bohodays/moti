import React, { useState } from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const PenaltySetting = ({ onNext }: stepProps) => {
  const { setPenaltyName, setPenaltyId } = useInvitationStore();
  const [customPenalty, setCustomPenalty] = useState('');

  const onStepNext = () => {
    if (customPenalty) {
      setPenaltyName(customPenalty);
      setPenaltyId(null);
      onNext('next');
    }
  };

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start gap-[100px] pt-36">
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

      <Button text="다음" customWrapperClassName="absolute bottom-10" onClick={onStepNext} />
    </div>
  );
};

export default PenaltySetting;
