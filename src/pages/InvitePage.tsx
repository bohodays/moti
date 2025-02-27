import React, { useState } from 'react';
import Invitation from '@components/invitation/Invitation';
import { MinorCategory } from '@components/invitation/MinorCategory';
import Nickname from '@components/invitation/Nickname';

const InvitePage = () => {
  const [step, setStep] = useState<'invitation' | 'nickname' | 'minorCategory' | 'complete'>('invitation');

  return (
    <div>
      {step === 'invitation' && <Invitation onNext={() => setStep('nickname')} />}
      {step === 'nickname' && (
        <Nickname onNext={cmd => (cmd === 'next' ? setStep('minorCategory') : setStep('invitation'))} />
      )}
      {step === 'minorCategory' && (
        <MinorCategory onNext={cmd => (cmd === 'next' ? setStep('complete') : setStep('nickname'))} />
      )}
    </div>
  );
};

export default InvitePage;
