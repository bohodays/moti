import React, { useState } from 'react';
import Input from '@components/common/Input';
import { BackIcon, ExclamationMarkIcon } from '@components/Icons';
import { stepProps } from 'src/types/common';

const Nickname = ({ onNext }: stepProps) => {
  const [nickname, setNickname] = useState('');

  return (
    <div className="relative flex h-lvh flex-col items-center justify-start gap-[100px] pt-36">
      <BackIcon
        width={45}
        height={45}
        className="absolute left-4 top-3 cursor-pointer"
        onClick={() => onNext('back')}
      />
      <div className="relative flex flex-col items-center justify-center">
        <div className="mb-[32px] text-[32px] text-mainTextWhiteColor">
          닉네임을 입력해주세요 <ExclamationMarkIcon className="inline -translate-x-[5px]" width={40} height={40} />
        </div>
      </div>

      <div className="w-full">
        <Input maxLength={12} value={nickname} isRefresh={true} onChange={e => setNickname(e.target.value)} />
        <div className="pl-6 pt-2 text-[#C0C0C0]">{`${nickname.length} / 12자`}</div>
      </div>
    </div>
  );
};

export default Nickname;
