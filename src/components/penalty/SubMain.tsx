import React from 'react';
import { ClockIcon } from '@components/Icons';

export type PropsType = {
  onNext: () => void;
};

const SubMain = ({ onNext }: PropsType) => {
  return (
    <div className="flex h-lvh items-center justify-center">
      <div className="relative flex flex-col items-center justify-center">
        <div className="absolute top-[-100px]">
          <ClockIcon width={82} height={82} />
        </div>
        <div className="text-[68px] text-mainTextWhiteColor">18:59:43</div>
        {/* 영률님 파트에서 설정한 부분을 받아서 렌더링해야 됨 */}
        <div className="text-[22px] text-mainTextWhiteColor">친구들한테 밈 인정받기</div>
      </div>

      <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 flex-col bg-yellow-400">
        <button className="bg-yellow-700">목표를 달성했어요!</button>
        <button className="bg-yellow-700" onClick={onNext}>
          {'친구랑 대결하기 >'}
        </button>
      </div>
    </div>
  );
};

export default SubMain;
