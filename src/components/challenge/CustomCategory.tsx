import React, { useState } from 'react';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const CustomCategory = ({ onNext }: stepProps) => {
  const [customCategory, setCustomCategory] = useState('');
  const { setTitle, setMajorCategoryId, setMinorCategoryId } = useInvitationStore();

  const onStepNext = () => {
    if (customCategory.length) {
      setMajorCategoryId(null);
      setMinorCategoryId(null);
      setTitle(customCategory);
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
        <div className="text-center text-[32px] text-white">나만의 재밌는</div>
        <div className="translate-x-[16px] text-[32px] text-white">
          목표를 정해보세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div className="w-full">
        <Input maxLength={40} value={customCategory} onChange={e => setCustomCategory(e.target.value)} />
        <button className="pl-6 pt-2 text-gray300" onClick={() => onNext('back')}>
          {'목표를 정해주세요 >'}
        </button>
      </div>

      <Button text="다음" customWrapperClassName="absolute bottom-10" onClick={onStepNext} />
    </div>
  );
};

export default CustomCategory;
