import React, { useEffect, useState } from 'react';
import { getMajorCategoryAll } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, QuestionMark, QuestionMark1, QuestionMark2, QuestionMark3 } from '@components/Icons';
import { majorCategory, stepProps } from 'src/types/common';

const MajorCategory = ({ onNext }: stepProps) => {
  const [majorCategory, setMajorCategory] = useState<majorCategory[]>([]);

  useEffect(() => {
    const onGetMajorCategoryAll = async () => {
      const response = await getMajorCategoryAll();
      setMajorCategory(response);
    };

    onGetMajorCategoryAll();
  }, []);

  return (
    <div className='className="relative gap-[30px]" flex h-lvh flex-col items-center justify-center'>
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="-translate-x-6 text-[32px] text-mainTextWhiteColor">어떤 챌린지에</div>
        <div className="question-mark-slider relative -translate-x-6 text-[32px] text-mainTextWhiteColor">
          관심이 가나요
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

        <div className="w-full">
          {majorCategory.length &&
            majorCategory.map(item => (
              <div key={item.id} className="w-full">
                <Button text={item.name} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MajorCategory;
