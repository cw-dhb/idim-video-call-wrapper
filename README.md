# SnapCall + Iframe overlay UI 예제

SnapCall 화상통화주소를 iframe으로 띄우고, 그 위에 UI요소를 배치하여 커스텀 UI, 로직을 구현하는 예제. <br/><br/>

# 파일 설명

- /pages/index.tsx: 화상통화, 커스텀 UI 코드 구현
- /server.js: 로컬 개발서버에 HTTPS를 적용. 모바일 브라우저에서 화상통화를 테스트하기 위해서는 HTTPS로 웹사이트를 호스팅해야한다.

# 테스트 방법

/pages/index.tsx의 snapCallUri를 새로 생성한 화상통화 주소로 교체하고 아래 명령어를 차례로 실행한다.

## 웹에서만 테스트할 경우

```bash
# 최초 1회만 실행
npm install

npm run dev
```

## 모바일에서 테스트할 경우

```bash
# 최초 1회만 실행
npm install

npm run builid
npm run dev-custom
```
