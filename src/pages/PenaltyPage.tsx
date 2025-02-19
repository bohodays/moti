import React, { useState } from 'react';
import MatchLink from '@components/penalty/MatchLink';
import PenaltyChoice from '@components/penalty/PenaltyChoice';
import PenaltySetting from '@components/penalty/PenaltySetting';
import SubMain from '@components/penalty/SubMain';
import TimeSetting from '@components/penalty/TimeSetting';

const PenaltyPage = () => {
  // const [registerData, setRegisterData] = useState();
  const [step, setStep] = useState<'subMain' | 'timeSetting' | 'penaltyChoice' | 'penaltySetting' | 'matchLink'>(
    'subMain'
  );

  return (
    <div>
      {step === 'subMain' && <SubMain onNext={() => setStep('timeSetting')} />}
      {step === 'timeSetting' && (
        <TimeSetting onNext={cmd => (cmd === 'next' ? setStep('penaltyChoice') : setStep('subMain'))} />
      )}
      {step === 'penaltyChoice' && (
        <PenaltyChoice onNext={cmd => (cmd === 'next' ? setStep('penaltySetting') : setStep('timeSetting'))} />
      )}
      {step === 'penaltySetting' && (
        <PenaltySetting onNext={cmd => (cmd === 'next' ? setStep('matchLink') : setStep('penaltyChoice'))} />
      )}
      {step === 'matchLink' && (
        <MatchLink onNext={cmd => (cmd === 'next' ? setStep('matchLink') : setStep('penaltySetting'))} />
      )}
    </div>
  );
};

export default PenaltyPage;
