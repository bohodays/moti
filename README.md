# moti

<br>

## 👪 개발 멤버 소개

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/bohodays">
            <img src="https://avatars.githubusercontent.com/u/109454527?v=4" width="140px" /> <br><br> 박중원 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/juhee77">
            <img src="https://avatars.githubusercontent.com/u/51548333?v=4" width="140px" /> <br><br> 박주희 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/dlwltn0350">
            <img src="https://avatars.githubusercontent.com/u/56522878?v=4" width="140px" /> <br><br> 이지수 <br>(Back-End) </a> <br></td>
    </tr>
</table>

<br />

## 📆 프로젝트 기간

### 25.01.31 ~ 25.03.08

<br />

## 🛠️ 기술 스택 (FE)

- React
- TypeScript
- Tailwind CSS
- Zustand

<br />

## 💡 서비스 소개

> `챌린지` 형식의 동기부여 서비스 <br />
> 24시간 내에 달성할 수 있는 챌린지를 설정하고 상대방과 공유하여 대결을 통해 성취감을 느끼고, 소통하는 컨텐츠

<br />

<table>
    <tr>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/86a5d168-8543-46cc-8ae0-494d39dc2fd8" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/83e5b338-71c6-4bfc-8f73-2bd61e6d5d98" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/760a86a8-06b3-4273-a484-57916834db65" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/1ae2f1e4-ba89-448a-bd93-3c8a59ceb31a" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/dc7e4d87-6cda-4b79-b58f-81158eb60bd3" width="140px" />
        </td>
    </tr>
</table>
<table>
    <tr>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/eda30982-409d-41d9-a137-1df2cc00a886" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/805e80f9-44a3-4b3a-afa6-bddfb4728fa2" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/fbabf009-9f2f-4951-bbc3-db8398d81e84" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/4d01361f-a845-4537-9d0b-ffc025434761" width="140px" />
        </td>
        <td height="140px" align="center"> 
        <img src="https://github.com/user-attachments/assets/40dd05ad-32a6-472e-bf04-a294a345b045" width="140px" />
        </td>
    </tr>
</table>

<br />

## 🖥️ 주요기능

- 원하는 챌린지를 설정합니다.
  - 주어진 카테고리를 선택하거나 본인이 원하는 챌린지를 입력합니다.
  - 챌린지를 실패했을 때 수행할 벌칙을 설정합니다.
  - 챌린지 시간을 설정합니다. (최대 24시간)
- 설정을 완료한 챌린지를 상대방에게 공유합니다. (주소 링크 방식)
- 챌린지 완료 버튼을 누르면 해당 챌린지가 완료되고 상대방에게 완료 여부가 전달됩니다.

<br />

## 해당 프로젝트를 진행하며 새롭게 적용한 기능

1. commit 단계에서 eslint와 prettier를 자동으로 적용하여 오류 체크

- commit을 하면 eslit와 prettier를 자동으로 적용시켜 오류를 체크하고, 오류가 있으면 commit이 진행되지 않도록 하였습니다. 이를 통해 코드의 일관성을 유지하고 품질을 향상시켰습니다.

<br />

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

- 퍼널 구조를 적용하여 어플리케이션을 더 구조화할 수 있었고, 새로운 디자인 패턴에 대해 알게 되었습니다.

<br />

3. Vercel을 이용한 배포

- Vercel을 이용하여 처음 배포하며 여러가지 문제를 겪었고, 이를 해결하는 과정에서 새로운 지식을 얻었습니다.
  - 로컬 환경에서는 정상적으로 api 요청 및 응답을 받았지만 배포되면 `proxy 설정`에 문제가 발생했습니다. vercel.json에 proxy 설정을 별도로 해야 된다는 것을 알게 되었고, 이를 적용 후 정상 동작했습니다.
  - 배포 시 개발자 도구에서 개발 코드가 모두 노출되었습니다. 배포 시 `코드(source map)를 비노출화`해야 된다는 것을 알게되어 이를 적용했습니다. 개발 환경에서는 노출시키고, 운영 환경에서는 노출시키지 않는 처리가 필요하다는 것을 알게 되었습니다.
  - 배포 시 `코드를 난독화`하여 사이버 공격을 방지하고 코드를 보호해야 된다는 것을 알게되어 이를 적용했습니다.

<br />

4. 복사된 링크 공유 시 OG 이미지 처리

- html에 og tag를 정의하여 복사된 링크를 상대방에게 공유 시 서비스의 이미지와 정보가 보이도록 설정했습니다.
  - og tag 처리를 위한 meta tag 설정에 대해 알게되었습니다.
