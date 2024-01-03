# 리액트 기본 원리 학습 및 영화앱 만들기

## 일반적인 HTML CDN방식

#### `CDN이란?`
  Content Delivery Network 약어로 콘텐츠 전송 네트워크를 뜻한다.
  일반적으로 웹 페이지에서 사용하는 정적 파일(이미지, 스타일 시트, 자바스크립트 파일 등)은 웹 서버에서 클라이언트로 직접 전송되어야 한다.    
  
  그러나 이러한 정적 파일 들은 전 세계의 사용자에게 더 빠르게 제공되기 위해서는 물리적으로 떨어진 여러 위치에 저장된 서버들을 활용하는것이 효과적이며, 이때 CDN은 이러한 분산된 서버들을 제공하고, 사용자가 특정 컨텐츠를 요청할 때 가장 가까운 서버에서 해당 컨텐츠를 전송함으로써 응답 시간을 최소화하고 성능을 향상시킨다.    
  
  CDN은 웹 사이트의 속도 향상, 대역폭 효율화, 보안 강화 등의 이점을 제공한다.
  많은 대형 웹 서비스 및 웹 사이트에서 CDN을 채택하여 사용자 경험을 개선하고 전체 네트워크 성능을 최적화 한다.    
  
  CDN을 사용하면 웹 페이지에서 필요한 외부 라이브러리나 프레임워크와 같은 스크립트 파일을 더 빠르게 다운로드 할 수 있다.    
  일반적으로 아래와 같이 `<script>` 태그를 사용하여 CDN으로 호스팅 된 스크립트를 가져올 수 있다.
  ```html
    <script src="https://cdn.example.com/jquery.min.js"></script>
  ```
  위의 코드에서 src속성에 CDN에서 호스팅되는 스크립트 파일의 URL이 들어가게 된다.
  이렇게 하면 해당 스크립트 파일이 웹 페이지로 더 효율적으로 전송되며, 사용자는 해당 스크립트 파일을 웹 서버에서 다운로드 하는 대신 CDN에서 다운로드 할 수 있다.

#### `React, ReactDom 임포트`  
crossorigin: Access-Control-Allow-Origin: * HTTP 헤더 설정을 사용하는지 확인함으로써 16이후 버전부터 더 쉽게 에러 처리를 할 수 있다.
```html
/* react */ 
<script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
/* react-dom */ 
<script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
```

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
```javascript
const Container = (
      <div>
        <h3 id="title" onMouseEnter={()=>{console.log("mouse Enter!")}}>
          Hello I'm a title
        </h3>
        <button style={{backgroundColor:"tomato"}} onClick={()=>{console.log("im Clicked!")}}>Click me</button>
      </div>
    )
    ReactDOM.render(Container, root) 
```
<hr/>

#### `Babel`   
Uncaught SyntaxError: Unexpected token '<'
위 오류는 브라우저가 온전히 JSX를 이해하는것이 아니기 때문에 발생하는 에러이며,
브라우저가 JSX를 이해할 수 있도록 변환과정을 거쳐야 한다.

Babel을 사용하여 아래와 같이 변환할 수 있다.

* JSX코드 (브라우저가 이해할수 없음)
  ```javascript
    const element = (`<h1 className="h1">h1</h1>`)
    ```

* javascript기반 React코드

  ```javascript
    const element = React.createElement(
        'h1', 
        {className='h1'},
        'h1'
    )
    ```
https://babeljs.io/ 사이트에 적용해보면 똑같이 변환되는것을 확인할 수 있다.

Babel standalone을 CDN을이용하여 다운받는다.    
https://babeljs.io/docs/babel-standalone    
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```


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

#### `JSX {} 중괄호 표현식`
JSX에서 중괄호를 사용하면 Javascript 표현식을 포함시킬 수 있다.
이를 통해 동적인 값을 JSX에 삽입할 수 있다.
삽입 된 JSX에 의해 동적인 값이 렌더링된다.
{[1,2,3,4,5]}중괄호 안에 배열 형태의 값을 삽입하면
배열을 순회하여 각 요소가 렌더링된다.

#### `useState`
`[variable, function]` 형태의 변수에 `React.useState(default)`를 배열 구조분해 할당 방식으로 저장한다.    
```javascript
const [count, setCount] = React.useState(0)
```   
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
```javascript
{index === "-1" ? "Please Select Your Units!" : null}   
{index === "0" ? <TimeConverter/> : null}   
{index === "1" ? <MilesConverter/> : null}
```   

논리연산자 사용   
```javascript
{index === "-1" && "Please Select Your Units!"}   
{index === "0" && <TimeConverter/>}   
{index === "1" && <MilesConverter/>}
```   
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
```javascript
const 컴포넌트함수명 = ({props1, props2 = 기본값, props3}) => {}//혹은
컴포넌트함수명({props1, props2 = 기본값, props3}) {}
```
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
```javascript
const CmnMemoBtn = React.memo(CommonBtn) 
<CmnMemoBtn title={value} onClick = {changeValue}/>
```  
<hr/>

#### `PropTypes`
Props의 타입들을 런타임 환경에서 콘솔을 통해 오류임을 확인시켜주는 기능.    
CDN일경우 react.development.js에서만 가능하다.
 * 대표 문법
    - 컴포넌트명.`propTypes` = {prop명 : `PropTypes`.`타입`}
    - 컴포넌트명.`propTypes` = {prop명 : `PropTypes`.`타입`.`isRequired`}
    - ```javascript 
      function Button({text}) {/* 생략 */}

      Button.propTypes = {text : PropTypes.string}
      Button.propTypes = {text : PropTypes.string.isRequired}

      function App(){
        return(<Button text="메롱"/>)
      }
      ```

`https://ko.legacy.reactjs.org/docs/typechecking-with-proptypes.html`
<hr/>


## Node Creat React App 패키지모듈 방식

### `CRA`
매우 많은 스크립트들과 많은 사전 설정들이 준비되어 있다.    
개발서버 접근 혹은 자동 반영(새로고침), 즉각적인 CSS 적용, public 즉, 배포 명령어 등의 기능이 내재되어있다.

1. node.js 다운
   -  `https://nodejs.org` 접속 후 OS환경에 맞는 nodejs 다운로드

   - cmd 명령어
     - ```bash
       PS C:\~> node -v
       ``` 
     - ```bash
       PS C:\~> npx 
       ```
2. create react app 패키지 모듈 다운로드

    - CRA 프로젝트 생성 명령어 (폴더로 생성된다)
      ```bash
        PS C:\~> npx create-react-app 프로젝트명 
      ```
      
    - 개발자 모드 서버구동
      ```bash
        PS C:\~> npm run start (혹은 npm start) 
      ```
<hr/>

### `ES6 모듈 시스템 - export default`
모듈이란?   
코드를 구성하고 조직화하기 위한 단위로, javascript에서는 코드를 분리하고 재사용 가능한 부분으로 나눌 때 사용한다.   
모듈은 독립적인 파일이나 코드 블록으로 정의되며, 해당 모듈의 변수, 함수, 클래스 등을 다른 파일에서 가져와 사용할 수 있게 한다.    
`(모듈의 단위는 js확장자를 가진 javascript파일 그 자체이다)`

ES6 모듈시스템
다른 파일에서 해당 모듈을 가져올 때 export default와 import문을 통해 가져온다.

#### `export` 현재 자바스크립트 파일로 부터 변수, 함수를 한번에 여러개 export할 수 있다.

```javascript
let moduleExVariable = "모듈 예제를 위한 변수로 export 가능"
function moduleExFunction() {
  return moduleExVariable
}
export {moduleExVariable, moduleExFunction} // 동시에 여러개 export
```

#### `import` 단일 export가 아닌 export{복수개} 라면 import시에도 {중괄호}를 사용해야한다.
```javascript
import { moduleExVariable, moduleExFunction } from './MyModule';
console.log(moduleExVariable) // "모듈 예제를 위한 변수로 export 가능" 출력
console.log(moduleExFunction) // "모듈 예제를 위한 변수로 export 가능" 출력
```

#### `export default`
한 모듈에서 하나의 항목만을 기본적으로 내보낼 수 있다.
다시 말해, 모듈 내에서 export default 문은 오직 하나의 항목만 지정 가능하다.

```javascript
let moduleExVariable = "모듈 예제를 위한 변수로 export 가능"
function moduleExFunction() {
  return moduleExVariable
}
export default moduleExFunction // 한 모듈에서 단 한개만 export
```

#### `import(default)` 단일 export일 경우 import시 {중괄호}를 생략 가능하다.
```javascript
import { moduleExVariable } from './MyModule'; //중괄호
import moduleExVariable from './MyModule'; //중괄호생략
```

### `CSS 모듈`
CRA가 클래스 이름을 랜덤하게 부여하기 때문에 서로 다른 클래스 이름들을 사용하기 위해 햇갈리거나 중복되지 않게끔 기억하고 있어야 하는 수고를 줄여준다.   

물론 각 컴포넌트가 동일한 클래스명의 코드를 가진 서로 다른 css파일을 참조하도록 설계해도 이 문제를 방지할 수 있겠지만, CSS Modules를 사용하는 경우 클래스명이 자동으로 지역 스코프 명으로 변환되므로 더욱 안전하게 스타일 모듈화가 가능해진다.

`~.module.css` 확장자를 사용한다

```css
/* App.module.css 파일*/
.title {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  color: navy;
}
```

```javascript
import styles from "./App.module.css"// cra가 ~.module.css 파일에 들어있는 css코드를 javascript object로 변환시켜준다.

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
    </div>
  );
}

export default App;
```

### `useEffect`

두 개의 argument를 가지는 형태의 function
```javascript
  useEffect(/* 실행할 함수 */, [/* 리액트가 지켜볼 dependency */])

  useEffect(function() {
    /* 실행할 코드 */
  }, [/* 변경 될 state변수 */])

  useEffect(()=>{
    /* 실행할 코드 */
  }, [/* 변경 될 state변수 */])
```
두번째 매개변수에 변경 될 state값을 지정하고 지정한 state값이 변경될 때에만 첫번재 매개변수에 선언한 함수를 실행시킨다.

- 첫번째 arg : state값이 변경될 때에만 실행하고 싶은 코드
- 두번째 arg : 배열 형태로 첫번째 arg를 실행을 위해 변경될 state를 지정
  - 두개 이상일 경우 두 state값이 대상이 된다.

기본적으로 두번째 배열이 버이었다면 component가 처음 render할 때(최초 렌더링시점 딱 한번) 실행되고, 다시는 실행되지 않는다.

### `cleanUp(useEffect)`
컴포넌트가 destroy 될 때 실행되는 함수이다.
useEffect의 첫번째 arg인 실행될 함수의 return문에 함수를 정의한다.

`유형1-1`) 익명 함수 선언식으로 반환
```javascript
  useEffect(function () {
    /* 실행할 코드 */
    console.log("crated :)")
    /* cleanUp함수 : return문에서 함수를 정의 */
    return function() {
      console.log("컴포넌트가 destroyed 되었다")
    }
  }, [])
```
`유형1-2`) 화살표 함수로 바로 반환
```javascript
  useEffect(()=>{
    /* 실행할 코드 */
    console.log("crated :)")

    /* cleanUp함수 : return문에서 함수를 정의 */
    return (()=> {console.log("컴포넌트가 destroyed 되었다")}) //return문 전체 괄호
    return ()=> {console.log("컴포넌트가 destroyed 되었다")} //return 전체 괄호 생략
    return ()=> console.log("컴포넌트가 destroyed 되었다") //실행할 코드가 한줄일경우
  }, [])
```
`유형 1-3`) 화살표 함수 표현식 & 함수 선언식 짬뽕
```javascript
  useEffect(function () {
    /* 실행할 코드 */
    console.log("crated :)")
    /* cleanUp함수 : return문에서 함수를 정의 */
    return ()=> console.log("컴포넌트가 destroyed 되었다")
  }, [])

  useEffect(() => {
    /* 실행할 코드 */
    console.log("crated :)")
    /* cleanUp함수 : return문에서 함수를 정의 */
    return function() {
      console.log("컴포넌트가 destroyed 되었다")
    }
  }, [])
```
`유형 2`) 함수를 미리 정의하고 정의된 함수를 반환
```javascript
  useEffect(()=>{
    console.log("crated :)")
    /* cleanUp함수 : 함수 블록 내에 destory 함수를 미리 정의하고 return문에서 함수를 반환 */
    const destroyed = () => console.log("destroyed :(")
    return destroyed;
  }, [])
```
`유형 3`) 함수를 미리 정의하고 정의된 함수를 반환
```javascript
  const destroyed = () => console.log("destroyed :(")

  const created = () => {
    console.log("created :)")
    /* cleanUp함수 : 함수 블록 내에 destory 함수를 미리 정의하고 return문에서 함수를 반환 */
    return destroyed  
  }
  useEffect(created, [])
```
예를들어, 누군가는 component가 없어질 때 어떤 분석 결과를 보내고 싶어할 수 있다.
혹은 event listener를 지우거나, console.log를 통해 출력할 수도 있다...
그럴때 사용한다!!

### `state 배열 요소 추가`
```javascript
const [arr, setArr] = useState([])
```
위 와 같이 배열 타입의 state 변수 arr은 const임에도 push() 함수를 사용하여 값을 추가할 수 있다.
하지만 push메서드를 사용하여 값을 추가하게 되면 React에서 state값이 변경됨을 감지할수 없으므로 리랜더링 되지 않는다.
따라서 useState의 set 초기화 함수와 전개식을 활용하여 값을 변경한다.
```javascript
setArr([...arr, "추가할 요소"])
```

이때 현재 상태에 기반하여 값을 업데이트 할 경우 함수형 업데이트를 해야한다.

```javascript
setArr(current => ["추가할요소", ...current]) // 배열의 가장 앞에 요소가 추가된다.
setArr(current => [...current, "추가할요소"]) // 배열의 가장 마지막에 요소가 추가된다.
```

위와 같이 함수형 업데이트는 여러가지 상태 업데이트가 연속적으로 발생하는 경우나 현재 상태에 의존해야 하는 경우 유용하다.    

코드 예를 들어본다.   
```javascript
const [data, setData] = useState(1)
useEffect(()=>{
  setData(data+1) // 첫번째 set
  setData(data+1) // 두번째 set
}, [])
console.log(data)
```
setState 함수는 비동기로 작동하므로 위와 같이 연속적으로 호출될 때 React는 이를 하나의 업데이트로 처리하지 않고 각 호출을 개별적으로 처리할 수 있다.    
이로 인해 이벤트 핸들러 내에서 여러번의 setData 호출이 연속으로 발생할 경우, 마지막 호출을 제외한 이전 호출은 이전 상태를 기반으로 하기 때문에 예상치 못한 결과가 발생할 수 있다.   

두번째 setData 호출이 첫번째 setData 호출을 인식하지 못할 수 있다.
즉, 첫번재 setData를 하고나서 바로 반영되지 않으므로 두번째 setData는 2가 아닌 1에 +1 하게된다.

이때 
```javascript
    setData(data=>data+1)
    setData(data=>data+1)
```
위와 같이 처리한다면 이전 상태를 보장한다
이전 상태를 보장한다는 말 보다는 최신 상태를 보장한다고 하는게 더 정확한것 같다.    
함수형 업데이트가 최신 상태를 보장하는 이유는
데이터를 set하고 다시 set할때 `매개변수로 변경된 data를 직접 받아와 처리`하기 때문이다.

### `Array.map()으로 REACT-Element 배열 반환`
map은 하나의 array에 있는 item을 원하는 무엇으로든지 바꿔 새로운 배열로 반환하는 역할을 한다.

```javascript
['hi', 'hello', 'bye', 'goodbye'].map(item=>item.toUpperCase()) // ['HI', 'HELLO', 'BYE', 'GOODBYE'] 로 반환
['hi', 'hello', 'bye', 'goodbye'].map(item=>item + " :)") // ['hi :)', 'hello :)', 'bye :)', 'goodbye :)'] 로 반환
```
배열의 요소를 순차적으로 접근하여 각 요소에 대해 연산을 수행한 뒤 모든 연산이 수행 된 요소들을 배열로 다시 반환한다.

`React Element 타입의 Array로 변환한 뒤 JSX로 렌더링`
```javascript
/* jsx */
return (
  <ul>
    {['hi', 'hello', 'bye', 'goodbye'].map(item=> <li>{item}</li>)}
  </ul>
)
```
react가 기본적으로 Array에 있는 모든 item들을 인식하기 때문에 key속성을 추가해야한다.
map함수의 arg는 총 3개로 순차값, 순차인덱스, 원본배열이 있다.
key속성에는 unique한 값을 적용해야 하므로 기본적으로 인덱스를 적용한다

```javascript
/* jsx */
return (
  <ul>
    {['hi', 'hello', 'bye', 'goodbye'].map((item, index)=> <li key={index}>{item}</li>)}
  </ul>
)
```