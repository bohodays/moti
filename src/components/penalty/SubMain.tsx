import React, { useEffect, useState } from 'react';
import { getMinorCategoryInfo } from '@api/user';
import Button from '@components/common/Button';
import { ClockIcon } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const SubMain = ({ onNext }: stepProps) => {
  const { title, taskRequestDto } = useInvitationStore();
  const [category, setCategory] = useState('');

  const onGetCategory = async () => {
    if (taskRequestDto.minorCategoryId) {
      const response = await getMinorCategoryInfo(taskRequestDto.minorCategoryId);
      setCategory(response.name);
    }
  };

  useEffect(() => {
    if (title) {
      setCategory(title);
    } else {
      onGetCategory();
    }
  }, []);

  return (
    <div className="relative flex h-lvh items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute top-[-100px]">
          <ClockIcon width={82} height={82} />
        </div>
        <div className="text-[68px] text-white">18:59:43</div>
        <div className="text-[22px] text-white">{category}</div>
      </div>

      <Button text="목표를 달성했어요" customWrapperClassName="absolute bottom-[5.2rem]" />
      <button className="absolute bottom-10 text-[18px] text-gray200" onClick={() => onNext()}>
        {'친구와 대결하기 >'}
      </button>
    </div>
  );
};

export default SubMain;
