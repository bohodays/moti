import React from 'react';
import { getPenaltyAll } from '@api/user';
import { BackIcon, ExclamationMarkIcon, Match } from '@components/Icons';
import usePenaltyStore from '@store/penaltyStore';
import { stepProps } from 'src/types/common';

const MatchLink = ({ onNext }: stepProps) => {
  const { penalty } = usePenaltyStore();

  const apiTest = async () => {
    const response = await getPenaltyAll();
    console.log({ response });
  };

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[80px]">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="text-[32px] text-white">대결장을 친구에게</div>
        <div className="translate-x-5 text-[32px] text-white">
          공유해보세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      {/* 대결장 */}
      <div className="relative flex h-[280px] w-[70%] flex-col justify-evenly rounded-[20px] bg-gray600">
        <Match className="absolute -top-11 left-1/2 -translate-x-1/2" width={90} height={90} />
        <div className="px-8 text-[18px]">
          <div className="text-gray300">챌린지 주제</div>
          {/* 영률팀 파트에서 정보 받아야 됨 */}
          <div className="text-white">아무도 안 할 것 같은 재밌는 챌린지</div>
        </div>
        <div className="px-8 text-[18px]">
          <div className="text-gray300">벌칙 내용</div>
          <div className="text-white">{penalty}</div>
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 flex-col bg-yellow-400">
        <button
          className="bg-yellow-700"
          // onClick={() => onNext('next')}
          onClick={apiTest}
        >
          링크 공유하기
        </button>
      </div>
    </div>
  );
};

export default MatchLink;
