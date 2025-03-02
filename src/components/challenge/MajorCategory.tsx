import React, { useEffect, useState } from 'react';
import { getMajorCategoryAll } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, QuestionMark, QuestionMark1, QuestionMark2, QuestionMark3 } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { majorCategory, stepProps } from 'src/types/common';

const MajorCategory = ({ onNext }: stepProps) => {
  const { setMajorCategoryId, title, setTitle } = useInvitationStore();
  const [majorCategory, setMajorCategory] = useState<majorCategory[]>([]);

  const onStepNext = (id: number) => {
    if (title) {
      setTitle(null);
    }
    setMajorCategoryId(id);
    onNext('next');
  };

  useEffect(() => {
    const onGetMajorCategoryAll = async () => {
      const response = await getMajorCategoryAll();
      setMajorCategory(response);
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
        <div className="-translate-x-6 text-[32px] text-white">어떤 챌린지에</div>
        <div className="question-mark-slider relative -translate-x-6 text-[32px] text-white">
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
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        {majorCategory.length &&
          majorCategory.map(item => (
            <div key={item.id} className="w-ful">
              <Button
                text={item.name}
                customButtonClassName="hover:text-gray700 bg-gray600 block h-[62px] rounded-[12px] text-white transition duration-300 ease-linear hover:bg-white"
                onClick={() => onStepNext(item.id)}
              />
            </div>
          ))}
      </div>

      <div>
        <button className="text-white" onClick={() => onNext('2stepNext')}>
          직접 작성할래요
        </button>
      </div>
    </div>
  );
};

export default MajorCategory;
