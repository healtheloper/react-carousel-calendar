# React JS Boilerplate - Light

### What Light ?

- Just run React, No CSS, No ESLint, etc..

### 설명

- webpack.config.js
  - mode : webpack 을 통해 빌드 될 모드, production or development
  - entry : App 의 entry point(file)
  - resolve : import from ".." 에 확장자 를 넣지 않아도 resolve 할 수 있도록 도와줌
  - module/rules : webpack 이 파일들을 돌면서 해당하는 파일에 어떤 loader 를 사용할 것인지 명시
  - output : 빌드된 결과물이 들어갈 폴더 이름 명시 및 파일 이름 지정
  - plugins : 기타 필요로 하는 플러그인 추가, html template 지정을 위해 HtmlWebpackPlugin 설치
  - devServer : webpack 을 통해 빌드된 결과를 간단한 dev-server 를 통해 확인할 수 있도록 설정하기위한 값들
    - static : static 한 파일들을 사용한다면 directory 지정 (favicon, png 등등, public 에 있는걸 사용한다면 directory 로 public 을 지정)
    - host : dev-server 로 사용될 host, 보통 'localhost' 사용
    - port : dev-server 로 사용될 PORT
    - hot : [HMR](https://webpack.kr/guides/hot-module-replacement/) 을 사용하게 할 것인지 유무
    - compress : 빌드된 결과를 압축할 것인지 여부
    - historyApiFallback : history API 혹은 react-router 를 사용하는 경우, 새로고침 시 404 에러가 발생하지 않도록 history 추적
- .babelrc

  - preset-env
    - ES6 등의 최신사양의 ECMAScript 를 사용하기 위한 다양한 plugin 들을 모아놓은 preset
    - polyfill 의 개념으로 corejs 를 사용
    - useBuiltIns : polyfill 의 삽입 방식을 설정
      - entry : corejs 삽입문(import) 를 변경시켜서 사용
        - core-js/stable 과 regenerator-runtime/runtime 모듈을 전역스코프에 직접 삽입한 경우에만 가능
        - 타깃 환경에 필요한 polyfill 만 전역 스코프에 추가하도록 함
      - usage : 실제 사용한 폴리필만 삽입, import 문 변경을 하지 않고 삽입함
  - preset-react
    - react 를 사용하기 위한 preset
      - JSX 코드를 React.createElement 호출 코드로 변경
    - runtime : 'automatic'
      - React v17 부터 import React 없이 JSX 문법을 사용할 수 있는데, 해당 옵션을 넣어야 가능
