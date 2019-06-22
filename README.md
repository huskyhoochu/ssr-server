# Server-Side Rendering Express module

### Summary

create-react-app 서버 사이드 렌더링을 위한 express.js 서버 모듈입니다.

이 저장소 자체로는 서버를 구동할 수 없지만 프론트 저장소에 submodule로 장착하여 사용합니다.

### How to use

이 모듈을 직접 `git clone` 받는 것이 아니라, 사용하려는 프론트 저장소에서 `git submodule add` 명령어로 추가하시면 됩니다.

```
(프론트 저장소 루트 디렉터리에서)
$ git subbmodule add <이 모듈의 repo url>
```
 
그 후 설치가 완료되면 `ssr-server` 폴더로 들어갑니다.
이 모듈은 TypeScript로 작성되었으므로 컴파일이 필요합니다.

```
$ yarn install
$ yarn build
```

그러면 `server_compiled` 라는 폴더가 생성됩니다. 이제 프론트 저장소의 `bootstrap.js` 파일에서 `ssr-server/server_compiled` 를 참조해 서버를 실행하면 됩니다. 

