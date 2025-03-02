import React, { useEffect, useState } from 'react';
import Button from '@components/common/Button';
import { ExclamationMarkIcon, Match } from '@components/Icons';
import useInvitedStore from '@store/invitedStore';
import { stepProps } from 'src/types/common';

const Invitation = ({ onNext }: stepProps) => {
  const { title, invitationTasks } = useInvitedStore();
  const [nickname, setNickname] = useState('');
  const [minorCategory, setMinorCategory] = useState('');
  const [penalty, setPenalty] = useState('');

  useEffect(() => {
    if (invitationTasks[0]?.nickname) {
      setNickname(invitationTasks[0]?.nickname);
    }

    if (title) {
      setMinorCategory(title);
    } else {
      if (invitationTasks[0]?.majorCategory.name) {
        setMinorCategory(invitationTasks[0]?.majorCategory.name);
      }
    }

    if (invitationTasks[0].penalty.name) {
      setPenalty(invitationTasks[0].penalty.name);
    }
  }, [title, invitationTasks]);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center gap-[80px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-center text-[32px] text-white">{`${nickname} 님이`}</div>
        <div className="text-center text-[32px] text-white">
          챌린지 대결장을 보냈어요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      {/* 대결장 */}
      <div className="relative flex h-[280px] w-[70%] flex-col justify-evenly rounded-[20px] bg-gray600">
        <Match className="absolute -top-11 left-1/2 -translate-x-1/2" width={90} height={90} />
        <div className="px-8 text-[18px]">
          <div className="text-gray300">챌린지 주제</div>
          <div className="text-white">{minorCategory}</div>
        </div>
        <div className="px-8 text-[18px]">
          <div className="text-gray300">벌칙 내용</div>
          <div className="text-white">{penalty}</div>
        </div>
      </div>

      <Button text="나도 참여하기" customWrapperClassName="absolute bottom-10" onClick={() => onNext('next')} />
    </div>
  );
};

export default Invitation;
