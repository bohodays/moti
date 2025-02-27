import React, { useEffect, useState } from 'react';
import { getMinorCategoryInfo, getPenaltyInfo, postInvitation } from '@api/user';
import Button from '@components/common/Button';
import { BackIcon, ExclamationMarkIcon, Match } from '@components/Icons';
import useInvitationStore from '@store/invitationStore';
import { stepProps } from 'src/types/common';

const MatchLink = ({ onNext }: stepProps) => {
  const { title, description, taskRequestDto } = useInvitationStore();
  const [category, setCategory] = useState('');
  const [penalty, setPenalty] = useState('');

  const onGetMajorCategoryAll = async () => {
    if (taskRequestDto.minorCategoryId) {
      const response = await getMinorCategoryInfo(taskRequestDto.minorCategoryId);
      setCategory(response.name);
    }
  };

  const onGetPenaltyInfo = async () => {
    if (taskRequestDto.penaltyId) {
      const response = await getPenaltyInfo(taskRequestDto.penaltyId);
      setPenalty(response.name);
    }
  };

  const onMakeLink = async () => {
    const response = await postInvitation({ title, description, taskRequestDto, endTime: null });

    console.log({ response });
    // TODO 도메인 주소 변수로 저장하기
    // TODO alert를 toast로 변경하기
    // const link = `https://moti-beta.vercel.app/${response.response.uuid}`; // 배포주소
    const link = `http://localhost:5173/${response.response.uuid}`; // 로컬주소

    try {
      await navigator.clipboard.writeText(link);
      alert('복사에 성공했습니다.');
    } catch (error) {
      console.error('클립보드 복사 실패', error);
      alert('복사에 실패했습니다.');
    }
  };

  useEffect(() => {
    if (title) {
      setCategory(title);
    } else {
      onGetMajorCategoryAll();
    }

    if (taskRequestDto.penaltyName) {
      setPenalty(taskRequestDto.penaltyName);
    } else {
      onGetPenaltyInfo();
    }
  }, []);

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
          <div className="text-white">{category}</div>
        </div>
        <div className="px-8 text-[18px]">
          <div className="text-gray300">벌칙 내용</div>
          <div className="text-white">{penalty}</div>
        </div>
      </div>

      <Button text="링크 공유하기" customWrapperClassName="absolute bottom-10" onClick={onMakeLink} />
    </div>
  );
};

export default MatchLink;
