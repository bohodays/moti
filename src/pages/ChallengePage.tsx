import React, { useState } from 'react';
import MajorCategory from '@components/challenge/MajorCategory';
import Nickname from '@components/challenge/Nickname';
import SubMain from '@components/challenge/SubMain';

const ChallengePage = () => {
  const [step, setStep] = useState<'subMain' | 'nickname' | 'majorCategory' | 'minorCategory' | 'complete'>('subMain');
  return (
    <div>
      {step === 'subMain' && <SubMain onNext={() => setStep('nickname')} />}
      {step === 'nickname' && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep('majorCategory') : setStep('subMain'))} />
      )}
      {step === 'majorCategory' && (
        <MajorCategory onNext={cmd => (cmd === 'next' ? setStep('minorCategory') : setStep('nickname'))} />
      )}
    </div>
  );
};

export default ChallengePage;
