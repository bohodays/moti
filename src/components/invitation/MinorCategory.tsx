import React, { useEffect, useState } from 'react';
import { getMajorCategoryInfo } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, QuestionMark, QuestionMark1, QuestionMark2, QuestionMark3 } from '@components/Icons';
import useInvitedStore from '@store/invitedStore';
import { minorCategory, stepProps } from 'src/types/common';

type CategoryType = {
  name?: string | null;
  myNickname: string | null;
  majorCategory: string;
  minorCategories: minorCategory[];
  onStepNext: (category: string) => void;
  onNext: (cmd: string) => void;
};

const Intro = ({ name, majorCategory }: Pick<CategoryType, 'majorCategory' | 'name'>) => {
  return (
    <div className="intro-slider flex h-dvh flex-col items-center justify-center">
      <div className="intro-item text-center text-[30px] text-white">{`${name} 님이`}</div>
      <div className="intro-item text-center text-[30px] text-white">고른 대결 주제는</div>
      <div className="intro-item text-center text-[30px] text-white">{`${majorCategory}에요`}</div>
    </div>
  );
};

const Category = ({ majorCategory, minorCategories, onStepNext, onNext, myNickname }: CategoryType) => {
  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[30px]">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex flex-col items-center">
        <div className="text-center text-[22px] text-white opacity-80">{majorCategory}</div>
        <div className="mt-2 text-center text-[32px] text-white">{`${myNickname} 님의`}</div>
        <span className="question-mark-slider relative -translate-x-2 text-center text-[32px] text-white">
          챌린지 주제는
          <QuestionMark
            className="qeustion-mark-item absolute -right-[44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark1
            className="qeustion-mark-item absolute -right-[44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark2
            className="qeustion-mark-item absolute -right-[44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
          <QuestionMark3
            className="qeustion-mark-item absolute -right-[44px] top-[50%] -translate-y-[50%]"
            width={40}
            height={40}
          />
        </span>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        {minorCategories.length &&
          minorCategories.map(item => (
            <div key={item.id} className="w-ful">
              <Button
                text={item.name}
                customButtonClassName="hover:text-gray700 bg-gray600 block h-[62px] rounded-[12px] text-white transition duration-300 ease-linear hover:bg-white"
                onClick={() => onStepNext(item.name)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export const MinorCategory = ({ onNext }: stepProps) => {
  const { title, myNickname, invitationTasks, setMyMinorCategory } = useInvitedStore();
  const [majorCategory, setMajorCategory] = useState('');
  const [minorCategories, setMinorCategories] = useState<minorCategory[]>([]);

  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 5500); // 1.5초 후 Intro 페이드아웃

    const switchTimer = setTimeout(() => {
      setShowCategory(true);
    }, 6500); // Intro가 사라지고 1초 후 Category 페이드인

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(switchTimer);
    };
  }, []);

  const onStepNext = (category: string) => {
    setMyMinorCategory(category);
    onNext('next');
  };

  const onGetMajorCategoryAll = async () => {
    const majorCategoryId = invitationTasks[0].majorCategory.id;
    if (majorCategoryId) {
      const response = await getMajorCategoryInfo(majorCategoryId);
      setMinorCategories(response.minorCategories);
    }
  };

  useEffect(() => {
    if (title) setMajorCategory(title);
    else if (invitationTasks[0].majorCategory.name) setMajorCategory(invitationTasks[0].majorCategory.name);

    onGetMajorCategoryAll();
  }, []);

  return (
    <>
      {!showCategory ? (
        <div className={`fade ${isFadingOut ? 'fade-out' : ''}`}>
          <Intro majorCategory={majorCategory} name={invitationTasks[0].nickname} />
        </div>
      ) : (
        <div className="fade fade-in">
          <Category
            myNickname={myNickname}
            majorCategory={majorCategory}
            minorCategories={minorCategories}
            onStepNext={onStepNext}
            onNext={onNext}
          />
        </div>
      )}
    </>
  );
};
