import React, { useState } from 'react';
import Complete from '@components/challenge/Complete';
import CustomCategory from '@components/challenge/CustomCategory';
import MajorCategory from '@components/challenge/MajorCategory';
import { MinorCategory } from '@components/challenge/MinorCategory';
import Nickname from '@components/challenge/Nickname';
import SubMain from '@components/challenge/SubMain';

enum Step {
  SUB_MAIN = 'subMain',
  NICKNAME = 'nickname',
  MAJOR_CATEGORY = 'majorCategory',
  MINOR_CATEGORY = 'minorCategory',
  CUSTOM_CATEGORY = 'customCategory',
  COMPLETE = 'complete',
}

const ChallengePage = () => {
  const [step, setStep] = useState<Step>(Step.SUB_MAIN);
  return (
    <div>
      {step === Step.SUB_MAIN && <SubMain onNext={() => setStep(Step.NICKNAME)} />}
      {step === Step.NICKNAME && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep(Step.MAJOR_CATEGORY) : setStep(Step.SUB_MAIN))} />
      )}
      {step === Step.MAJOR_CATEGORY && (
        <MajorCategory
          onNext={cmd =>
            cmd === '2stepNext'
              ? setStep(Step.CUSTOM_CATEGORY)
              : cmd === 'next'
                ? setStep(Step.MINOR_CATEGORY)
                : setStep(Step.NICKNAME)
          }
        />
      )}
      {step === Step.MINOR_CATEGORY && (
        <MinorCategory onNext={cmd => (cmd === 'next' ? setStep(Step.COMPLETE) : setStep(Step.MAJOR_CATEGORY))} />
      )}
      {step === Step.CUSTOM_CATEGORY && (
        <CustomCategory onNext={cmd => (cmd === 'next' ? setStep(Step.COMPLETE) : setStep(Step.MAJOR_CATEGORY))} />
      )}
      {step === Step.COMPLETE && <Complete onNext={cmd => (cmd === 'next' ? '' : setStep(Step.MAJOR_CATEGORY))} />}
    </div>
  );
};

export default ChallengePage;
