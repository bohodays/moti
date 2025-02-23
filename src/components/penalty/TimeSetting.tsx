import React, { useEffect, useRef, useState } from 'react';
import Button from '@components/common/Button';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const TimeSetting = ({ onNext }: stepProps) => {
  const { setEndTime } = useInvitationStore();

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
    const now = new Date();
    now.setHours(hour, min, 0, 0);
    setEndTime(now);
    onNext('next');
  };

  useEffect(() => {
    hourInput.current?.focus();
  }, []);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start gap-[100px] pt-36">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="relative flex flex-col items-center justify-center">
        <div className="mb-[62px] text-[32px] text-white">
          대결 시간을 정해주세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
        <div className="flex gap-8 text-[22px] text-white">
          <div className="flex items-center justify-center">
            <input
              id="hour"
              type="number"
              value={hour}
              ref={hourInput}
              className="mr-[8px] h-[48px] w-[68px] rounded-[24px] border-none bg-gray600 text-center text-[30px] caret-transparent outline-none focus:text-green500"
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
              className="mr-[8px] h-[48px] w-[68px] rounded-[24px] border-none bg-gray600 text-center text-[30px] caret-transparent outline-none focus:text-green500"
              onChange={e => onValidationTime('min', e.target.value)}
            />
            <label className="text-[30px] text-[#9C9C9C]" htmlFor="minute">
              분
            </label>
          </div>
        </div>
      </div>

      <Button text="다음" customWrapperClassName="absolute bottom-10" onClick={onStepNext} />
    </div>
  );
};

export default TimeSetting;
