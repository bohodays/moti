import React from 'react';
import { BackIcon, QuestionMark } from '@components/Icons';
import usePenaltyStore from '@store/penaltyStore';
import { PropsParamType } from './TimeSetting';

const PenaltyChoice = ({ onNext }: PropsParamType) => {
  const { setPenalty } = usePenaltyStore();

  const onPenaltySelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const penalty = e.currentTarget.innerText;
    setPenalty(penalty);
    onNext('next');
  };

  const onStepNext = () => {
    setPenalty('');
    onNext('next');
  };

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[30px]">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="flex flex-col items-center justify-center">
        <div className="-translate-x-6 text-[32px] text-mainTextWhiteColor">대결에서 진 사람은</div>
        <div className="text-[32px] text-mainTextWhiteColor">
          어떤 벌칙이 있나요 <QuestionMark className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[20px]">
        <button
          className="block h-[52px] w-[85%] rounded-[12px] bg-[#404040] text-mainTextWhiteColor transition duration-300 ease-linear hover:bg-mainTextWhiteColor hover:text-mainBgColor"
          onClick={onPenaltySelect}
        >
          재밌는 소품이나 옷을 입고 인스타에 올리기
        </button>
        <button
          className="block h-[52px] w-[85%] rounded-[12px] bg-[#404040] text-mainTextWhiteColor transition duration-300 ease-linear hover:bg-mainTextWhiteColor hover:text-mainBgColor"
          onClick={onPenaltySelect}
        >
          엉뚱한 문구로 랜덤 카톡 보내기
        </button>
        <button
          className="block h-[52px] w-[85%] rounded-[12px] bg-[#404040] text-mainTextWhiteColor transition duration-300 ease-linear hover:bg-mainTextWhiteColor hover:text-mainBgColor"
          onClick={onPenaltySelect}
        >
          유행하는 릴스 찍기
        </button>
        <button
          className="block h-[52px] w-[85%] rounded-[12px] bg-[#404040] text-mainTextWhiteColor transition duration-300 ease-linear hover:bg-mainTextWhiteColor hover:text-mainBgColor"
          onClick={onPenaltySelect}
        >
          정해주는 음식 먹기
        </button>
        <button
          className="block h-[52px] w-[85%] rounded-[12px] bg-[#404040] text-mainTextWhiteColor transition duration-300 ease-linear hover:bg-mainTextWhiteColor hover:text-mainBgColor"
          onClick={onPenaltySelect}
        >
          이긴 사람한테 5,000원 보내주기
        </button>
      </div>

      <div>
        <button className="text-mainTextWhiteColor" onClick={onStepNext}>
          직접 작성할래요
        </button>
      </div>
    </div>
  );
};

export default PenaltyChoice;
