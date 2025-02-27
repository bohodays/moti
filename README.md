# moti

### 해당 프로젝트를 진행하며 새롭게 적용한 항목

1. commit 단계에서 eslint와 prettier를 자동으로 적용하여 오류 체크

- commit을 하면 eslit와 prettier를 자동으로 적용시켜 오류를 체크하고, 오류가 있으면 commit이 진행되지 않도록 함. 이를 통해 코드의 일관성을 유지하고 품질을 향상시킴.

<br>

2. 토스의 퍼널 구조 적용

- https://www.youtube.com/watch?v=NwLWX2RNVcw&t=436s

<br>

### TODO

- [x] vercel proxy 설정
  - 로컬 환경에서 정상적으로 api요청 및 응답을 받았지만 배포되면 proxy 설정에 문제가 생겼음. vercel.json에 proxy 설정을 해야 된다는 것을 확인 후 적용함.
- [ ] css 이미지 애니메이션 tailwinds로 적용해보기
- [ ] React-Query 적용해보기
- [ ] 각 페이지의 step을 enum 형태로 저장하기
- [ ] suspensive 라이브러리로 에러 처리하기
- [ ] 배포 시 코드(source map) 비노출화 적용하기
- [ ] 배포 시 코드 난독화 적용하기
