import React from 'react';
import Button from '@components/common/Button';
import { Mask1, Mask2, Mask3 } from '@components/Icons';
import { stepProps } from 'src/types/common';

const SubMain = ({ onNext }: stepProps) => {
  return (
    <div className="flex h-lvh items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center gap-40">
        <div>
          <div className="text-center text-[28px] text-white">오늘은 어떤 목표로</div>
          <div className="text-center text-[28px] text-white">짜릿한 성취감을 느껴볼까요?</div>
        </div>
        <div className="image-slider relative">
          <Mask1
            className="image-item absolute right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]"
            width={140}
            height={140}
          />
          <Mask2
            className="image-item absolute right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]"
            width={140}
            height={140}
          />
          <Mask3
            className="image-item absolute right-[50%] top-[50%] -translate-y-[50%] translate-x-[50%]"
            width={140}
            height={140}
          />
        </div>
        <Button text="재밌는 목표 정해주세요" onClick={() => onNext()} />
      </div>
    </div>
  );
};

export default SubMain;
