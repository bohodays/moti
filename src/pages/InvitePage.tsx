import React, { useState } from 'react';
import Complete from '@components/invitation/Complete';
import Invitation from '@components/invitation/Invitation';
import { MinorCategory } from '@components/invitation/MinorCategory';
import Nickname from '@components/invitation/Nickname';

enum Step {
  INVITATION = 'invitation',
  NICKNAME = 'nickname',
  MINOR_CATEGORY = 'minorCategory',
  COMPLETE = 'complete',
}

const InvitePage = ({ uuid }: { uuid: string }) => {
  const [step, setStep] = useState<Step>(Step.INVITATION);

  return (
    <div>
      {step === Step.INVITATION && <Invitation onNext={() => setStep(Step.NICKNAME)} />}
      {step === Step.NICKNAME && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep(Step.MINOR_CATEGORY) : setStep(Step.INVITATION))} />
      )}
      {step === Step.MINOR_CATEGORY && (
        <MinorCategory uuid={uuid} onNext={cmd => (cmd === 'next' ? setStep(Step.COMPLETE) : setStep(Step.NICKNAME))} />
      )}
      {step === Step.COMPLETE && <Complete />}
    </div>
  );
};

export default InvitePage;
