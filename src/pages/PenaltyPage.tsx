import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MatchLink from '@components/penalty/MatchLink';
import PenaltyChoice from '@components/penalty/PenaltyChoice';
import PenaltySetting from '@components/penalty/PenaltySetting';
import SubMain from '@components/penalty/SubMain';
import TimeSetting from '@components/penalty/TimeSetting';

enum Step {
  SUB_MAIN = 'subMain',
  TIME_SETTING = 'timeSetting',
  PENALTY_CHOICE = 'penaltyChoice',
  PENALTY_SETTING = 'penaltySetting',
  MATCH_LINK = 'matchLink',
}

const PenaltyPage = () => {
  const location = useLocation();
  const { target } = location.state || {};
  const [step, setStep] = useState<Step>(target === 'subMain' ? Step.SUB_MAIN : Step.TIME_SETTING);

  return (
    <div>
      {step === Step.SUB_MAIN && <SubMain onNext={() => setStep(Step.TIME_SETTING)} />}
      {step === Step.TIME_SETTING && (
        <TimeSetting onNext={cmd => (cmd === 'next' ? setStep(Step.PENALTY_CHOICE) : setStep(Step.SUB_MAIN))} />
      )}
      {step === Step.PENALTY_CHOICE && (
        <PenaltyChoice
          onNext={cmd =>
            cmd === '2stepNexp'
              ? setStep(Step.MATCH_LINK)
              : cmd === 'next'
                ? setStep(Step.PENALTY_SETTING)
                : setStep(Step.TIME_SETTING)
          }
        />
      )}
      {step === Step.PENALTY_SETTING && (
        <PenaltySetting onNext={cmd => (cmd === 'next' ? setStep(Step.MATCH_LINK) : setStep(Step.PENALTY_CHOICE))} />
      )}
      {step === Step.MATCH_LINK && (
        <MatchLink onNext={cmd => (cmd === 'next' ? setStep(Step.MATCH_LINK) : setStep(Step.PENALTY_CHOICE))} />
      )}
    </div>
  );
};

export default PenaltyPage;
