# 💡welcom to MBTI Lab💡

### MBTI 성격 유형 테스트 서비스 프로젝트
배포 링크: [https://mbti-project-eight.vercel.app/](https://mbti-project-eight.vercel.app/)

<img width="1847" alt="스크린샷 2024-11-28 오전 11 31 52" src="https://github.com/user-attachments/assets/1bc3ac2c-e5f6-4b00-871c-001fc31192e3">

<br/>

# 🕹️ 프로젝트 기능
### 1️⃣ Redux Toolkit, JWT 인증 API, LocalStorage를 활용한 로그인 상태 관리
- `configStore.js`, `authSlice.js`에서 Redux Toolkit을 사용하여 로그인, 로그아웃, 유저 상태 관리
- `auth.js`에서 JWT 인증 서버와 통신하여 회원가입, 로그인, 프로펄 정보 획득 및 수정
- LocalStorage에 JWT 토큰을 저장하여, 새로고침 후에도 로그인이 유지될 수 있도록 구현

### 2️⃣ json-server, Tanstact Query를 활용한 테스트 결과 상태 관리
- `testReuslt.js`에서 json-server와 통신하여 테스트 결과 획득, 생성, 삭제, 공개/비공개 여부 변경
- `TestResults.jsx`, `TestResultItem.jsx`에서 Tanstact Query를 사용하여 테스트 결과 상태 관리

### 3️⃣ RRD(React Rounter DOM)을 활용한 페이지 라우팅
- 페이지 라우팅 구현
- 로그인 된 유저가 접근할 수 있는 페이지와 아닌 페이지 구분( `PriviteRoute` / `ProtectedRoute` )

### 4️⃣ 로그인, 회원가입 실시간 유효성 검사
- `userForm`에서 `validation.js`를 활용해 폼 제출 전 input change마다 유효성 검사를 진행

### 5️⃣ accessToken 만료 시 로그아웃 처리
- 토큰이 만료된 상태에서 JWT 인증 서버와 통신 시도 시(프로필 변경, 테스트 결과 제출, 조회 등) 로그아웃 처리


<br />

# ⚙️ Development Environment
`upabase/supabase-js: ^2.46.1` `react-router-dom: ^6.28.0` `styled-components: ^6.1.13` `styled-reset: ^4.5.2` `vite: ^5.4.10`

<br/>

# 🖥️ Technologies & Tools (FE) 🖥️
<div>
<img src="https://img.shields.io/badge/Javascript-F7DF1E?style=flat&logo=Javascript&logoColor=white" />
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" />
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat&logo=CSS&logoColor=white" />
<img src="https://img.shields.io/badge/StyledComponent-FF4785?style=flat-square&logo=StyledComponent&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=flat-square&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Notion-000000?style=flat-square&logo=Notion&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>
</div>
