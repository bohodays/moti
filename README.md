# moti

### 해당 프로젝트를 진행하며 새롭게 적용한 항목

1. commit 단계에서 eslint와 prettier를 자동으로 적용하여 오류 체크

- commit을 하면 eslit와 prettier를 자동으로 적용시켜 오류를 체크하고, 오류가 있으면 commit이 진행되지 않도록 함. 이를 통해 코드의 일관성을 유지하고 품질을 향상시킴.

<br>

2. 토스의 퍼널 구조 적용

- https://www.youtube.com/watch?v=NwLWX2RNVcw&t=436s

```typescript
  import React, { useState } from 'react';
  import Invitation from '@components/invitation/Invitation';
  import { MinorCategory } from '@components/invitation/MinorCategory';
  import Nickname from '@components/invitation/Nickname';
  import Complete from '@components/invitation/Complete';

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
```

<br>

### TODO

- [x] vercel proxy 설정
  - 로컬 환경에서 정상적으로 api요청 및 응답을 받았지만 배포되면 proxy 설정에 문제가 생겼음. vercel.json에 proxy 설정을 해야 된다는 것을 확인 후 적용함.
- [x] 배포 환경과 개발 환경에서 환경변수 분리하기
- [ ] React-Query 적용해보기
- [x] 각 페이지의 step을 enum 형태로 저장하기
- [ ] suspensive 라이브러리로 에러 처리하기
- [x] 배포 시 코드(source map) 비노출화 적용하기
- [x] 배포 시 코드 난독화 적용하기
- [ ] 복사된 링크 공유 시 OG이미지 처리하기
