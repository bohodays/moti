import React, { useState } from 'react';
import Nickname from '@components/challenge/Nickname';
import SubMain from '@components/challenge/SubMain';

const ChallengePage = () => {
  const [step, setStep] = useState<'subMain' | 'nickname' | 'challengeChoice' | 'challengeSetting' | 'complete'>(
    'subMain'
  );
  return (
    <div>
      {step === 'subMain' && <SubMain onNext={() => setStep('nickname')} />}
      {step === 'nickname' && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep('challengeChoice') : setStep('subMain'))} />
      )}
    </div>
  );
};

export default ChallengePage;
