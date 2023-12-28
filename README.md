# 리액트 기본 원리 학습 및 영화앱 만들기

### 일반적인 HTML CDN방식
[`ReactJS`]
UI를 interactive하게 만들어 준다.

[`react-dom`]
library 혹은 package이며 모든 React element들을 HTML body안에 렌더링할 수 있게 도와준다.    

바닐라JS 에서는 HTML을 먼저 만들고 만들어진 HTML 엘리먼트를 Javascript를 통해 dom node 객체로 가져와서 html을 수정한다    
ReactJS 에서는 렌더링할 위치를 제외하고는 모든 HTML 엘리먼트를 Javascript로 만든다.   
javascript를 톨해 html element를 생성하였고 React-DOM이 비로서 HTML로 번역한다.   
React.createElement를 통해 element를 생성한다   
ReactJS를 통해 업데이트가 필요한 element를 업데이트 할 것이다.    
즉, ReactJS가 결과물인 HTML을 업데이트 할 수 있다는 것이다.   
ReactJS는 업데이트한 내역을 HTML에 보여주는 역할을 한다.    


[`JSX`]   
JSX는 javascript를 확장한 문법이다.   
React.createElement()와 같이 React요소를 만들 수 있는데 HTML에서 사용한 문법과 유사한 문법을 사용한다.    
HTML과 유사하기 때문에 JSX로 React요소를 만드는게 개발자들 입장에서 굉장히 편리하다.

[`Babel`]   
Uncaught SyntaxError: Unexpected token '<'
위 오류는 브라우저가 온전히 JSX를 이해하는것이 아니기 때문에 발생하는 에러이며,
브라우저가 JSX를 이해할 수 있도록 변환과정을 거쳐야 한다.

Babel을 사용하여 아래와 같이 변환할 수 있다.

* JSX코드 (브라우저가 이해할수 없음)
  - const element = (`<h1 className="h1">h1</h1>`)

* javascript기반 React코드
  - const element = React.createElement('h1', {className='h1'}, 'h1')

https://babeljs.io/ 사이트에 적용해보면 똑같이 변환되는것을 확인할 수 있다.

Babel standalone을 CDN을이용하여 다운받는다.    
https://babeljs.io/docs/babel-standalone    
`<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`


babel을 사용함으로써 해당 JSX코드는 브라우저가 읽을 수 있는
javascript기반의 React코드로 변환되어 <head>영역에 올라간다.

`+ 이때 babel에 의해 변환된 코드는 아래와 같은 특징이 있다.`

- 모든 변수는 var로 변환된다.   
- 모든 함수는 표현식으로 변환된다.    

(각각의 이유는 babel에 의해 ES5문법과, 함수 선언문에 대한 호이스팅 문제를 모두 고려하여 변환됨.)

결과적으로 JSX는 어플리케이션을 여러가지 작은 요소(컴포넌트단위)로 나누어 관리할 수 있게 도와준다.