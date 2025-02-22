import React, { useState } from 'react';
import Complete from '@components/challenge/Complete';
import CustomCategory from '@components/challenge/CustomCategory';
import MajorCategory from '@components/challenge/MajorCategory';
import { MinorCategory } from '@components/challenge/MinorCategory';
import Nickname from '@components/challenge/Nickname';
import SubMain from '@components/challenge/SubMain';

const ChallengePage = () => {
  const [step, setStep] = useState<
    'subMain' | 'nickname' | 'majorCategory' | 'minorCategory' | 'customCategory' | 'complete'
  >('subMain');
  return (
    <div>
      {step === 'subMain' && <SubMain onNext={() => setStep('nickname')} />}
      {step === 'nickname' && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep('majorCategory') : setStep('subMain'))} />
      )}
      {step === 'majorCategory' && (
        <MajorCategory
          onNext={cmd =>
            cmd === '2stepNext'
              ? setStep('customCategory')
              : cmd === 'next'
                ? setStep('minorCategory')
                : setStep('nickname')
          }
        />
      )}
      {step === 'minorCategory' && (
        <MinorCategory onNext={cmd => (cmd === 'next' ? setStep('complete') : setStep('majorCategory'))} />
      )}
      {step === 'customCategory' && (
        <CustomCategory onNext={cmd => (cmd === 'next' ? setStep('complete') : setStep('majorCategory'))} />
      )}
      {step === 'complete' && (
        <Complete onNext={cmd => (cmd === 'next' ? console.log('TEST') : setStep('majorCategory'))} />
      )}
    </div>
  );
};

export default ChallengePage;
