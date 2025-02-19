import React, { useEffect, useRef, useState } from 'react';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import usePenaltyStore from '@store/penaltyStore';
import { stepProps } from 'src/types/common';

const TimeSetting = ({ onNext }: stepProps) => {
  const { setTime } = usePenaltyStore();

  const hourInput = useRef<HTMLInputElement | null>(null);
  const [hour, setHour] = useState<number>(24);
  const [min, setMin] = useState<number>(0);

  const onValidationTime = (type: string, time: string) => {
    let parsedTime = parseInt(time, 10);

    if (type === 'min' && hour === 24) {
      setMin(0);
      return;
    }

    if (type === 'hour' && parsedTime >= 24) {
      setMin(0);
    }

    parsedTime = type === 'hour' ? Math.max(0, Math.min(parsedTime, 24)) : Math.max(0, Math.min(parsedTime, 59));

    if (type === 'hour') {
      setHour(parsedTime);
    } else {
      setMin(parsedTime);
    }
  };

  const onStepNext = () => {
    setTime([hour, min]);
    onNext('next');
  };

  useEffect(() => {
    hourInput.current?.focus();
  }, []);

  return (
    <div className="relative flex h-lvh items-center justify-center">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="relative flex flex-col items-center justify-center">
        <div className="mb-[32px] text-[32px] text-mainTextWhiteColor">
          대결 시간을 정해주세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
        <div className="flex gap-8 text-[22px] text-mainTextWhiteColor">
          <div className="flex items-center justify-center">
            <input
              id="hour"
              type="number"
              value={hour}
              ref={hourInput}
              className="mr-[8px] h-[48px] w-[68px] rounded-[24px] border-none bg-[#404040] text-center text-[30px] caret-transparent outline-none focus:text-mainGreenColor"
              onChange={e => onValidationTime('hour', e.target.value)}
            />
            <label className="text-[30px] text-[#9C9C9C]" htmlFor="hour">
              시간
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              id="minute"
              type="number"
              value={min.toString().padStart(2, '0')}
              className="mr-[8px] h-[48px] w-[68px] rounded-[24px] border-none bg-[#404040] text-center text-[30px] caret-transparent outline-none focus:text-mainGreenColor"
              onChange={e => onValidationTime('min', e.target.value)}
            />
            <label className="text-[30px] text-[#9C9C9C]" htmlFor="minute">
              분
            </label>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 left-1/2 flex -translate-x-1/2 flex-col bg-yellow-400">
        <button className="bg-yellow-700" onClick={onStepNext}>
          다음
        </button>
      </div>
    </div>
  );
};

export default TimeSetting;
