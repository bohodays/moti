import React, { useEffect, useState } from 'react';
import { getMajorCategoryInfo } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, QuestionMark, QuestionMark1, QuestionMark2, QuestionMark3 } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { minorCategory, stepProps } from 'src/types/common';

export const MinorCategory = ({ onNext }: stepProps) => {
  const { taskRequestDto, setMinorCategoryId } = useInvitationStore();
  const [majorCategory, setMajorCategory] = useState('');
  const [minorCategories, setMinorCategories] = useState<minorCategory[]>([]);

  const onStepNext = (id: number) => {
    if (setMinorCategoryId) {
      setMinorCategoryId(id);
      onNext('next');
    }
  };

  useEffect(() => {
    const onGetMajorCategoryAll = async () => {
      if (taskRequestDto.majorCategoryId) {
        const response = await getMajorCategoryInfo(taskRequestDto.majorCategoryId);
        setMajorCategory(response.major.name);
        setMinorCategories(response.minorCategories);
      }
    };

    onGetMajorCategoryAll();
  }, []);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[30px]">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div>
        <div className="text-center text-[22px] text-white opacity-80">{majorCategory}</div>
        <div className="mt-2 text-center text-[32px] text-white">이런 챌린지로</div>
        <div className="question-mark-slider relative -translate-x-2 text-center text-[32px] text-white">
          도전해 보는거 어때요
          <QuestionMark
            className="qeustion-mark-item absolute right-[-44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark1
            className="qeustion-mark-item absolute right-[-44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark2
            className="qeustion-mark-item absolute right-[-44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark3
            className="qeustion-mark-item absolute right-[-44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        {minorCategories.length &&
          minorCategories.map(item => (
            <div key={item.id} className="w-ful">
              <Button
                text={item.name}
                customButtonClassName="hover:text-gray700 bg-gray600 block h-[62px] rounded-[12px] text-white transition duration-300 ease-linear hover:bg-white"
                onClick={() => onStepNext(item.id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
