# 리액트 기본 원리 학습 및 영화앱 만들기

[ReactJS]
UI를 interactive하게 만들어 준다.

[react-dom]
library 혹은 package이며 모든 React element들을 HTML body안에 렌더링할 수 있게 도와준다.

바닐라JS 에서는 HTML을 먼저 만들고 만들어진 HTML 엘리먼트를 Javascript를 통해 dom node 객체로 가져와서 html을 수정한다
ReactJS 에서는 렌더링할 위치를 제외하고는 모든 HTML 엘리먼트를 Javascript로 만든다.
javascript를 톨해 html element를 생성하였고 React-DOM이 비로서 HTML로 번역한다.
React.createElement를 통해 element를 생성한다
ReactJS를 통해 업데이트가 필요한 element를 업데이트 할 것이다.
즉, ReactJS가 결과물인 HTML을 업데이트 할 수 있다는 것이다.
ReactJS는 업데이트한 내역을 HTML에 보여주는 역할을 한다.