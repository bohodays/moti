import React, { useEffect, useState } from 'react';
import { getMinorCategoryInfo } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const Complete = ({ onNext }: stepProps) => {
  const { title, taskRequestDto } = useInvitationStore();
  const [mainTitle, setMainTitle] = useState('');

  useEffect(() => {
    console.log({ taskRequestDto });
    if (title) {
      setMainTitle(title);
    } else {
      const onGetMajorCategoryAll = async () => {
        if (taskRequestDto.minorCategoryId) {
          const response = await getMinorCategoryInfo(taskRequestDto.minorCategoryId);
          setMainTitle(response.name);
        }
      };
      onGetMajorCategoryAll();
    }
  }, []);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start gap-[100px] pt-36">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex w-[85%] flex-col items-center justify-center gap-40">
        <div className="translate-x-[8px] text-[32px] text-white">
          챌린지가 완성됐어요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>

        <div className="text-[24px] text-white">{mainTitle}</div>
      </div>

      <div className="absolute bottom-10 flex w-[90%]">
        <Button
          text="완료"
          customWrapperClassName="w-[35%]"
          customButtonClassName="w-[90%] bg-white"
          onClick={() => onNext('next')}
        />
        <Button
          text="친구랑 대결하기"
          customWrapperClassName="w-[65%]"
          customButtonClassName="w-[90%]"
          onClick={() => onNext('next')}
        />
      </div>
    </div>
  );
};

export default Complete;
