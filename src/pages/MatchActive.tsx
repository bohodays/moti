import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getInvitationInfo, getMinorCategoryInfo } from '@api/user';
import Button from '@components/common/Button';
import { Target } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import useInvitedStore from '@store/invitedStore';

const MatchActive = () => {
  const location = useLocation();
  const matchType = location.state || {}; // 데이터 없을 경우 대비
  const {
    title: inviteTitle,
    taskRequestDto,
    uuid,
    startTime: inviteStartTime,
    endTime: inviteEndTime,
  } = useInvitationStore();
  const {
    title: invitedTitle,
    myMinorCategory,
    invitationTasks,
    startTime: invitedStartTime,
    endTime: invitedEndTime,
  } = useInvitedStore();

  const [myTarget, setMyTarget] = useState<string | null>(null);
  const [rivalName, setRivalName] = useState<string | null>(null);
  const [rivalTarget, setRivalTarget] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const [remainingTime, setRemainingTime] = useState('');

  const onGetMinorCategoryInfo = async (id: number) => {
    const response = await getMinorCategoryInfo(id);
    setMyTarget(response.name);
  };

  const onFetchStatus = async (uuid: string) => {
    const response = await getInvitationInfo(uuid);
    if (response.status !== 'DURING') {
      setIsExpired(true);
    }

    if (matchType.type === 'invite') {
      if (response.invitationTasks.length > 1) {
        setRivalName(response.invitationTasks[1].nickname);
        setRivalTarget(response.invitationTasks[1].minorCategory.name);
      }
    }
  };

  const updateRemainingTime = () => {
    // ✅ UTC 시간을 명확하게 Date 객체로 변환 (ISO 8601 보장)
    const startTimeUTC = new Date((matchType.type === 'invite' ? inviteStartTime : invitedStartTime) + 'Z');
    const endTimeUTC = new Date((matchType.type === 'invite' ? inviteEndTime : invitedEndTime) + 'Z');

    // ✅ 현재 시간
    const nowUTC = new Date();

    // ✅ 남은 시간 계산 (UTC 기준)
    const totalDuration = Math.floor((endTimeUTC.getTime() - startTimeUTC.getTime()) / 1000);
    const elapsedTime = Math.floor((nowUTC.getTime() - startTimeUTC.getTime()) / 1000);
    const diffInSeconds = Math.max(0, totalDuration - elapsedTime);

    // ⏱ 시, 분, 초 변환
    const hours = String(Math.floor(diffInSeconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diffInSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(diffInSeconds % 60).padStart(2, '0');

    // ✅ UI에 KST 기준으로 남은 시간 표시
    setRemainingTime(`${hours}:${minutes}:${seconds}`);
  };

  useEffect(() => {
    console.log({ taskRequestDto });
    if (matchType.type === 'invited') {
      setMyTarget(myMinorCategory);
      setRivalName(invitationTasks[0].nickname);
      setRivalTarget(invitedTitle ? invitedTitle : invitationTasks[0].minorCategory.name);
    } else if (matchType.type === 'invite') {
      if (inviteTitle) setMyTarget(inviteTitle);
      else onGetMinorCategoryInfo(taskRequestDto.minorCategoryId as number);

      if (!rivalName) setRivalName(null);
    }
  }, [inviteEndTime]);

  useEffect(() => {
    updateRemainingTime(); // 최초실행

    const interval = setInterval(updateRemainingTime, 1000); // 1초마다 업데이트
    return () => clearInterval(interval); // 언마운트 시 정리
  });

  useEffect(() => {
    const interval = setInterval(() => onFetchStatus(uuid as string), 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-lvh flex-col items-center justify-center">
      <div className="flex -translate-y-32 flex-col items-center">
        <Target width={60} height={60} />
        <div className="text-[32px] text-white">{myTarget}</div>
      </div>

      <div className="relative flex w-[70%] flex-col items-center justify-center gap-8">
        <div className="text-[40px] text-white">{remainingTime}</div>
        <Button text="목표를 달성했어요!" />
      </div>

      <div className="absolute bottom-10 flex w-[85%] justify-between rounded-[16px] bg-[#2E2E2E] px-6 py-4 text-[18px] text-gray200">
        <div className="flex flex-col gap-2">
          <div className="text-[16px] text-gray300">
            {rivalName ? `${rivalName} 님의 챌린지` : '상대방의 참여를 기다리고 있어요.'}
          </div>
          <div>{rivalTarget}</div>
        </div>
        <div className="h-fit rounded-[16px] bg-gray300">
          <div className="px-2 py-1 text-[14px] text-gray600">{isExpired ? '종료' : '진행 중'}</div>
        </div>
      </div>
    </div>
  );
};

export default MatchActive;
