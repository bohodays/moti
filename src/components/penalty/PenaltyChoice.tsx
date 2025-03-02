import React, { useEffect, useState } from 'react';
import { getPenaltyAll } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, QuestionMark } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { minorCategory, stepProps } from 'src/types/common';

const PenaltyChoice = ({ onNext }: stepProps) => {
  const { setPenaltyId, setPenaltyName } = useInvitationStore();
  const [penalties, setPenalties] = useState<minorCategory[]>([]);

  const onStepNext = (type: string, id = 0) => {
    if (type === 'custom') {
      setPenaltyId(null);
      onNext('next');
    } else {
      setPenaltyId(id);
      setPenaltyName(null);
      onNext('2stepNexp');
    }
  };

  const getPenalties = async () => {
    const response = await getPenaltyAll();
    setPenalties(response);
  };

  useEffect(() => {
    getPenalties();
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
        <div className="-translate-x-6 text-[32px] text-white">대결에서 진 사람은</div>
        <div className="text-[32px] text-white">
          어떤 벌칙이 있나요 <QuestionMark className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div
        className="flex h-[480px] w-full flex-col items-center justify-center gap-[20px] overflow-y-auto"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {penalties.map(item => (
          <Button
            key={item.id}
            text={item.name}
            customButtonClassName="hover:text-gray700  bg-gray600 block h-[62px] rounded-[12px] text-white transition duration-300 ease-linear hover:bg-white"
            onClick={() => onStepNext('select', item.id)}
          />
        ))}
      </div>

      <div>
        <button className="text-white" onClick={() => onStepNext('custom')}>
          직접 작성할래요
        </button>
      </div>
    </div>
  );
};

export default PenaltyChoice;
