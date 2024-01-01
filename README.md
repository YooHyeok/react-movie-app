# 리액트 기본 원리 학습 및 영화앱 만들기

## 일반적인 HTML CDN방식
#### `ReactJS`
UI를 interactive하게 만들어 준다.
<hr/>

#### `react-dom`
library 혹은 package이며 모든 React element들을 HTML body안에 렌더링할 수 있게 도와준다.    

바닐라JS 에서는 HTML을 먼저 만들고 만들어진 HTML 엘리먼트를 Javascript를 통해 dom node 객체로 가져와서 html을 수정한다    
ReactJS 에서는 렌더링할 위치를 제외하고는 모든 HTML 엘리먼트를 Javascript로 만든다.   
javascript를 톨해 html element를 생성하였고 React-DOM이 비로서 HTML로 번역한다.   
React.createElement를 통해 element를 생성한다   
ReactJS를 통해 업데이트가 필요한 element를 업데이트 할 것이다.    
즉, ReactJS가 결과물인 HTML을 업데이트 할 수 있다는 것이다.   
ReactJS는 업데이트한 내역을 HTML에 보여주는 역할을 한다.    
<hr/>

#### `JSX`   
JSX는 javascript를 확장한 문법이다.   
React.createElement()와 같이 React요소를 만들 수 있는데 HTML에서 사용한 문법과 유사한 문법을 사용한다.    
HTML과 유사하기 때문에 JSX로 React요소를 만드는게 개발자들 입장에서 굉장히 편리하다.
<hr/>

#### `Babel`   
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
<hr/>

#### `JSX Property`    
`class`는 `className` 으로 
`for`은 `htmlFor` 로 적용해 줘야한다.
<hr/>

#### `리랜더링`    
일반적인 변수를 선언하고 해당 변수를 컴포넌트 내부에서 참조하여 출력할 때
특정 이벤트를 통해 값이 변경되고 변경된 값을 화면에 반영하기 위해서는 UI를 다시 렌더링 해야한다.

(일반 변수의 값은 이벤트가 발생할 때 마다 실제로는 증가하지만 리액트의 컴포넌트는 랜더링 이후 변경되지 않기 때문)

이때! ReactJS는 컴포넌트 전체를 렌더링 하는것이 아닌 값이 변경된 변수를 참조하고 있는 영역만 인식해서 변경시켜준다.
<hr/>

#### `useState`
`[variable, function]` 형태의 변수에 `React.useState(default)`를 배열 구조분해 할당 방식으로 저장한다.    
`const [count, setCount] = React.useState(0)`   
React.useState()함수는 count 변수에 데이터를 건내주고 setCount() 함수를 통해 count데이터를 초기화 할 수 있게 된다.    
count데이터가 초기화 될 때, 해당 state를 소유하고 있는 컴포넌트가 리랜더링 된다.    

setCount(count + 1) 이렇게 현재 값을 기준으로 1만큼 더해서 업데이트 할때
문제가 발생할 수 있다.
일반적으로 useState함수는 비동기적으로 이루어지기 때문에, 먼저 setState가 발생했더라도 중간에 다른 위치에서 똑같이 setState가 호출되고 먼저 종료된다면
현재값이 보장되지 않는다
(예를들어 데이터베이스의 ATM,트랜잭션 병행제어 원리)

현재 state를 이용해서 다음state를 위한 계산을 해주는 연산은 해당 업데이트가 발생하기 전에 현재 state가 변경될 수 있기 때문에 (비동기) 현재 변경할때 예측했던 값과 다른 값이 발생할 수 있다.     
이전 state를 이용하여 현재 state를 바꾸려 했지만 예상과 다른 결과가 발생할 수 있다.
이때 setCount의 인자로 콜백 함수를 통해 값을 변경한다.

setCount((current)=>{return current+1}) 줄이면 setCount(current=>current+1)
이렇게 변경하게된다면 React에서 current가 확실한 현재시점의 값이라는걸 보장하게 된다.

함수형 업데이트를 사용하지 않고 setState의 호출포인트가 동시에 2곳에서 발생한다면
두 함수중 어느 함수가 먼저 종료하였다고 하더라도 state값은 동일하게 시작했으므로
순차적으로 처리가 안되고 만약 state값이 1이라면 1 + 1, 1 + 3  이렇게 될 수 있다
함수형 업데이트를 한다면 1 + 1 이후 state값은 2가 되므로 2 + 3으로 적용됨
<hr/>

#### `조건부 렌더링`  

삼항연산자 사용   
{`index === "-1"` ? `"Please Select Your Units!"` : `null`}   
{`index === "0"` ? `<TimeConverter/>` : `null`}   
{`index === "1"` ? `<MilesConverter/>` : `null`}

논리연산자 사용   
{`index === "-1"` && `"Please Select Your Units!"`}   
{`index === "0"` && `<TimeConverter/>`}   
{`index === "1"` && `<MilesConverter/>`}

<hr/>

#### `props와 JSX 컴포넌트`    
부모 컴포넌트로 부터 자식 컴포넌트에 데이터를 보낼 수 있게 해주는 방법중 하나이다.    

컴포넌트 함수 매개변수를 통해 object형태의 props 데이터를 받을 수 있다.   
(props 매개변수 이름은 자유이며 컴포넌트는 단 1개의 매개변수로 props값만 받는다.)   
즉, JSX에서 특정 이름의 속성으로 데이터를 넣어주게 되면 {속성명: value}의 형태로 넘어오기 때문에 
props.속성명 으로 접근한다.   
만약 함수의 매개변수 형태를 직접적인 {object} 형태로 받는다면 JSX에서 지정한 속성이름으로 바로 받을 수 있다.   
이는 구조분해할당 문법의 원리와 같다.   
text, data 2개의 props를 넘겼다면 ({title, data}) 로 직접 받아 사용이 가능하다.   
이때 props의 순서와는 전혀 상관 없이 이름과 일치하는 속성으로 1:1 매칭된다.   
<hr/>

#### `props의 default값과 구조분해할당`    
컴포넌트에서 argument로 지정된 props를 JSX에서 넘기지 않는다면 undefined로 넘어오게 된다.
사실상 문제가 발생하지 않으나, 구조 분해 할당 문법을 통해 해당 props의 기본값을 지정할 수 있다.
`const 컴포넌트함수명 = ({props1, props2 = 기본값, props3}) => `
props2에 대한 값이 undefined로 넘어오게 된다면 기본값이 적용된다.
<hr/>

#### `props 함수 전달`
특정 이벤트에 의해 부모로 부터 넘겨받은 함수를 자식 컴포넌트에서 실행하여 부모 컴포넌트의 state 값을 조작할 수 있다.
<hr/>

#### `memo`
위와 같이 props로 함수를 전달하여 부모 컴포넌트의 state를 변경하게 되면 부모 컴포넌트가 리렌더링 된다.    
하지만 부모 컴포넌트에서 렌더링하는 모든 컴포넌트들이 함께 리렌더링된다.    
이는 추후에 어플리케이션이 느려지는 원인이 될 수 있다.    
이때, 부모 컴포넌트의 리렌더링을 발생시킨 state 즉, 변경된 state값을 props로 넘겨받는 컴포넌트만 부모 컴포넌트와 함께 리랜더링 되도록 해줄 수 있다.   
`const CmnMemoBtn = React.memo(CommonBtn)`    
`<CmnMemoBtn title={value} onClick = {changeValue}/>`
<hr/>

#### `PropTypes`
Props의 타입들을 런타임 환경에서 콘솔을 통해 오류임을 확인시켜주는 기능.    
CDN일경우 react.development.js에서만 가능하다.
 * 대표 문법
   - 컴포넌트명.`propTypes` = {prop명 : `PropTypes`.`타입`}
   - 컴포넌트명.`propTypes` = {prop명 : `PropTypes`.`타입`.`isRequired`}

`https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html`
<hr/>


## Node Creat React App 패키지모듈 방식

#### `CRA`
매우 많은 스크립트들과 많은 사전 설정들이 준비되어 있다.    
개발서버 접근 혹은 자동 반영(새로고침), 즉각적인 CSS 적용, public 즉, 배포 명령어 등의 기능이 내재되어있다.

1. node.js 다운
    - nodejs.org
    - cmd node -v 명령어 입력
    - cmd npx 명령어 입력

2. create react app 패키지 모듈 다운로드
    - npx create-react-app 프로젝트명 (폴더로 생성된다)
    - npm run start (npm start)
