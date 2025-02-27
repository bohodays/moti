import React, { useEffect, useState } from 'react';
import { getRandomNickname } from '@api/user';
import Button from '@components/common/Button';
import Input from '@components/common/Input';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import useInvitedStore from '@store/invitedStore';
import { stepProps } from 'src/types/common';

const Nickname = ({ onNext }: stepProps) => {
  const { myNickname, setMyNickname } = useInvitedStore();
  const [nickname, setNickname] = useState('');

  const onGetRandomNickname = async () => {
    const response = await getRandomNickname();
    setNickname(response);
  };

  const onStepNext = () => {
    setMyNickname(nickname);
    onNext('next');
  };

  useEffect(() => {
    if (myNickname) setNickname(myNickname);
    else {
      onGetRandomNickname();
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
      <div className="relative flex flex-col items-center justify-center">
        <div className="mb-[32px] text-[32px] text-white">
          닉네임을 입력해주세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div className="w-full">
        <Input
          maxLength={12}
          value={nickname}
          isRefresh={true}
          onChange={e => setNickname(e.target.value)}
          onRefresh={onGetRandomNickname}
        />
        <div className="pl-6 pt-2 text-gray300">{`${nickname.length} / 12자`}</div>
      </div>

      <Button text="다음" customWrapperClassName="absolute bottom-10" onClick={onStepNext} />
    </div>
  );
};

export default Nickname;
