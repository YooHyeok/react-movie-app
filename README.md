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
<hr/>

#### `JSX Property`    
`class`는 `className` 으로 
`for`은 `htmlFor` 로 적용해 줘야한다.
<hr/>

#### `컴포넌트`
HTML 형태의 JSX를 반환하는 함수이다.    
React는 Component를 가져와서 Browser가 이해할 수 있는 평범한 HTML로 만든다.   
결과적으로 JSX는 어플리케이션을 여러가지 작은 요소(컴포넌트단위)로 나누어 관리할 수 있게 도와준다.    

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

#### `props의 defaultProps와 구조분해할당`    
컴포넌트에서 argument로 지정된 props를 JSX에서 넘기지 않는다면 undefined로 넘어오게 된다.
사실상 문제가 발생하지 않으나, 구조 분해 할당 문법을 통해 해당 props의 기본값을 지정할 수 있다.

`정적 속성 기본값 설정`
```javascript

const 컴포넌트함수명 = ({props1, props2, props3}) => {}//혹은

컴포넌트함수명.`defaultProps`={
    props2: 기본값
}
```

`비구조화 할당과 동시에 기본값 설정`
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
    - Array의 경우 array로 propTypes 적용할 수 있다.
    배열의 상세한 타입을 적용할때 arrayOf()로 배열의 공통(자바의 Generic과 유사)
    타입을 지정할 수 있다.
    - ```javascript
      prop이름: PropTypes.arrayOf(PropTypes.string).isRequired
      // String만 허용하는 배열의 propTypes
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
<hr/>

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
<hr/>

### `cleanUp(useEffect)`
컴포넌트가 destroy 될 때 실행되는 함수이다.
클래스형 컴포넌트의 componentWillUnmount와 유사한 기능이다.
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
<hr/>

### `state 배열 요소 추가`
```javascript
const [arr, setArr] = useState([])
```
위 와 같이 배열 타입의 state 변수 arr은 const임에도 push() 함수를 사용하여 값을 추가할 수 있다.
하지만 push메서드를 사용하여 값을 추가하게 되면 React에서 state값이 변경됨을 감지할수 없으므로 리랜더링 되지 않는다.
(배열을 통째로 갈아줘야하므로 전개식으로 복제해야함.. )
따라서 useState의 set 초기화 함수와 전개식을 활용하여 값을 변경한다.

```javascript
setArr([...arr, "추가할 요소"])
```

이때 현재 상태에 기반하여 값을 업데이트 할 경우 함수형 업데이트를 해야한다.

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

```javascript
setArr(current => ["추가할요소", ...current]) // 배열의 가장 앞에 요소가 추가된다.
setArr(current => [...current, "추가할요소"]) // 배열의 가장 마지막에 요소가 추가된다.
```

Object 타입의 state 변경
```javascript
const [obj, setObj] = useState({a:null, b:null})
  setObj( /* 값 1개만 변경 */
    current => ({...current, a: current.a+1})
  )
  setObj( /* 값 2개 변경 */
    current => ({...current, a: current.a+1, b: "바보멍충아!"})
  )
```
`만약 이전값과 현재 변경하려는 값이 일치하더라도 컴포넌트 리렌더링은 발생한다.    
하지만 React는 Virtual Dom을 사용하여 실제 Dom에 반영하기 전에 이전 VirtualDom과 현재 VirtualDom을 비교하고 변경된 부분만 실제 Dom에 반영하게 된다.   
개발자도구를 통해 제로 확인하면 render(){}함수에 출력문을 넣었을때 리랜더링 되는것을 확인할 수 있으나
해당 state변수를 사용하는 곳은 값이 그대로일때는 변경되지 않고, 값이 변경되었다면 해당 위치에만 블록이 지정되면서 값이 변경되었다는것을 보여준다.   
이는 VirtualDom에 의해서 변경된 state값이 사용되는 위치만 반영한것으로 성능이 최적화된 방식이다.`



<hr/>

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
<hr/>

### `OptionalChaing ? (ES11)`
일반적인 변수 혹은 객체의 속성이 undefined인지 여부를 파악한다.
변수 혹은 속성에 접근할 때 해당 속성이 undefined일 경우 undefined를 반환하고 에러를 방지한다.

```javascript
const [arr, setArr] = useState()
return {arr.length}
```
위와 같이 useState에 아무런 초기값을 세팅하지 않고,
값을 주입 하지 않은 상태에서 데이터를 출력하려고 하면
arr변수는 현재 undefined이므로 length 속성에 접근자체가 불가능하므로 오류를 출력한다

```javascript
const [arr, setArr] = useState()
return {arr?.length}
```
위와 같이 적용하면 undefined이므로 아무것도 출력하지 않고 오류도 뱉지 않는다.
<hr/>

### `fetch와 promise`
Promise 객체는 비동기 작업의 최종 완료 또는 실패를 나타내는 객체이다.
비동기 작업이 끝날 때 까지 결과를 기다리는 것이 아닌 결과를 제공하겠다는 `약속`을 반환한다는 의미로 Promise라 명명지었다.

```javascript
  const fetch = (url) => new Promise((resolve, reject)=>{
    /* 통신 로직 시작 */
    try {
      
      function Response (url) { // 생성자 함수. (클래스로 만들라는 경고 무시 가능)
        this.status = 200; 
        this.data = {content: "통신성공"}; 
        this.url= url; 
      }

      /**
       * 생성자 함수 내부에서 프로토타입에 메서드를 추가하는 것은 
       * 일반적으로 생성자 함수가 호출될 때마다 매번 해당 메서드가 재정의되므로 비효율적일 수 있으므로
       * 보통은 생성자 함수와 프로토타입을 분리해서 작성하는 것이 일반적
       * @returns 
       */
      Response.prototype.json = function () { // 클래스에서는 멤버 메소드로 선언하면 된다.
        return this.data;
      };

      resolve(new Response(url))

    } catch(error) {
      reject(error)
    }
    /* 통신 로직 종료 */
  })

  const getApiData = async(url) => {
    try {
      return await fetch("https://URL");
    } catch (error) {
      console.log(error)
    }
  }

  UseEffect(()=>{
    getApiData();
  }, [])

```

fetch는 Promise를 반환하는 비동기 통신 함수이다.
이때 Promise가 아닌 response객체를 직접 반환하는데 이는
resolve() 호출에 의해 Promise성공을 알리는 개체를 호출하였으므로 이행상태로 변함과 동시에
resolve(response) 매개변수로 담아주면 .then() 혹은 함수의 반환값으로 response 값을 return한다
```javascript
const response = fetch(url, [options])
```
option : 선택 매개변수로 method방식이나 header등을 지정할 수 있다.

<hr/>

### `React Router Dom`

> Step01) React Router Dom Npm을 다운로드한다
- ```text/plain
    > npm install react-router-dom
  ```
> Step02) react-router-dom import
- ```javascript
    /* 5.3.0 v - Switch*/
    import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
    /* 6 v 이상 - Switch 대신 Routes 사용*/
    import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
  ```
> Step03) 라우팅 할 컴포넌트에 Router 컴포넌트로 각 컴포넌트를 등록해준다.
```javascript
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie" element={<Detail/>}/>
      </Routes>
    </Router>
  )
  ```
  - Route 컴포넌트에 url과 매핑할 컴포넌트를 작성한다.    
  각 path에 맞는 url요청이 들어오면 해당하는 매핑된 컴포넌트를 출력한다. (갈아끼우는 느낌..)
  
###### `a 태그와 Link 컴포넌트`

  - `<a/>`    
  전통적인 네비게이션 방식으로, React Router와 같은 SPA 라우팅을 고려하지 않는다.
  Route와 호환은 되지만 Link와 다르게 GET방식으로 새고로침하여 컴포넌트를 렌더링한다.

  - `<Link/>`   
  ReactRouterDom에서 제공하는 SPA 방식의 네비게이션을 지원한다.
  전체 새로고침 하지 않고도 빠르게 컴포넌트를 바꿔 출력한다.

    ```html
      <!-- URL 요청에 맞는 라우트를 찾아 컴포넌트를 렌더링 (ReFresh됨) -->
      <a href="/movie"> 
      <!-- URL 요청에 맞는 라우트를 찾아 컴포넌트를 렌더링 (ReFresh안됨) -->
      <Link to="/movie">
    ```
  - `동적 파라미터와 useParams`   
  Route에 등록한 path속성에 경로 매개변수(URL동적 세그먼트) 방식으로 파라미터를 적용한다.

    라우터에 파라미터 등록   

    ```javascript
      /* Router import */
      import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
      /* JSX */
      return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movie/>}/>
            <Route path="/detail/:id" element={<Detail/>} />
          </Routes>
        </BrowserRouter>
      )
    ```
    ```javascript
      /* Link import */
      import { Link } from 'react-router-dom';
      /* JSX */
      export default function Main() {
        const id = 1;
        return(
          <Link to={`/detail/${id}`}>
            {title}
          </Link>
        )
      }
    ```
    디테일 컴포넌트
    ```javascript
      import {useParams} from "react-router-dom"
      const { id } = useParams()
      export default function Detail() {
        return (
          <>{id}</> /* 1이 출력된다. */
        )
      }
    ```
<hr/>

# *`빌드와 배포`*

## `gh-pages`    
<details>
<summary>[ 상세보기 ]</summary>
　

결과물을 github pages에 업로드할 수 있게 해주는 패키지 라이브러리다.
  1) 브랜치 관리    
  gh-pages라는 브랜치에 정적 파일을 배포할 수 있다.   
  이를 통해 마스터(Main) 브랜치와 별개로 Github Pages에 필요한 파일들을 관리할 수 있다.   

  2) 빌드 스크립트    
  프로젝트를 빌드할 때, `gh-pages`는 빌드된 파일들을 `gh-pages` 브랜치에 추가하고 커밋하여 Github Pages에 업데이트 된 사이트를 배포한다.

  3) CNAME 설정   
  커스텀 도메인을 사용하려는 경우 `gh-pages`를 통해 CNAME 파일을 설정할 수 있다.


`Step 01-1)` gh-pages 패키지모듈 다운
```text/plain
  > npm i gh-pages
```
package.json의 scripts에 등록된 build script를 실행하면
웹 사이트의 production ready code를 생성하게 된다.
production ready란 코드가 압축되고 모든게 최적화 된다는 의미이다.

npm run build 명령어를 통해 build를 실행시킨다.
압축하고 최적화하는 등 일정 시간이 소요된댜.

디렉토리에 build 폴더가 생긴것을 확인할 수 있다.

`Step 01-2)`  gh-pages로 실제 deploy될 DNS주소 등록

package.json 최 하단에
```json
  ,"homepage" : "https://github의username.github.io/repository명
```
을 추가한다.    

`step 02-1)` deploy script를 scripts에 추가한다.
> Scripts에 `"deploy":"gh-pages -d build"` script 추가

```json
  "scripts": {
    /* 중략 */
    "deploy" : "gh-pages -d build"
  }
  /* 중략 */
  ,"homepage" : "https://github의username.github.io/repository명
```
해당 스크립트가 실행되면 앞서 설치한 gh-pages를 실행시키고 build라는 디렉토리를 가져간다.    


`step 02-2)` 먼저 build하고 deploy하도록 자동화 적용    
> Scripts에 `"predeploy": "npm run build"` script 추가
```json
  "scripts": {
    /* 중략 */
    "deploy" : "gh-pages -d build",
    "predeploy": "npm run build" //추가
  }
```
deploy를 실행시키면 자동으로 `predeploy`가 먼저 실행되고    
`npm run build` 명령어를 통해 build를 먼저 실행시키게 된다.
<hr/>

## `완성된 package.json`
```json
  "scripts": {
    /* 중략 */
    "deploy" : "gh-pages -d build"
  }
  /* 중략 */
  ,"homepage" : "https://github의username.github.io/repository명
```

`Step 03`) npm run deploy 실제 빌드 및 배포 실행
```
  > npm run deploy
```
npm run deploy 명령을 직접 실행하면
Node.js가 predeploy를 먼저 실행시켜 build를 진행한 뒤
build가 끝나면 deploy가 순차적으로 진행된다.

homepage로 등록한 github pages 주소에 접속하면 배포를 확인할 수 있으며
배포가 완료될 때 까지 일정 시간이 소요된다.
<hr/>
</details>
<br/>
<hr/>



## `Router 호스팅 환경변수 설정`
<details>
<summary>[ 상세보기 ]</summary>
　

ReactRouter의 경우 v6 부터 아래의 환경변수를 적용해야 한다.
`${process.env.PUBLIC_URL}`   
위 환경변수는 React앱에서 사용되는 환경변수 중 하나로, 앱이 호스팅되는 기본 경로에 대한 정보를 포함한다.    
일반적으로 React앱은 빌드되고 정적 파일로 제공될 때 경로 문제가 발생할 수 있다.   
특히, 앱을 서브 디렉토리에서 호스팅하거나 특정 경로에 배치하는 경우에 해당한다.   

예를들어 Router가 가리키는 "/" 경로는 `https://yoohyeok.github.io` 주소 뒤에 오는 "/" 경로이다.     
 - `https://yoohyeok.github.io/`

하지만 내 프로젝트는 /react-movie-app 경로에 존재하고 있다.
Router는 `https://yoohyeok.github.io/`로 이동하려고 하고 있지만, 실제 프로젝트는 `https://yoohyeok.github.io/react-movie-app/`에 있기 때문에 의도대로 동작하지 않게 된다.
이때 `process.env.PUBLIC_URL` 환경변수로 프로젝트의 기본 URL을 적용할 수 있다.

```javascript
return(
  <Router basename={process.env.PUBLIC_URL}>
    {/* 라우트 구성 */}
  </Router>
)
```
혹은
```javascript
return(
  <Router>
    <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
          <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={<Detail/>}/>
        </Routes>
  </Router>
)
```

이때 process.env.PUBLIC_URL 환경변수 값은 package.json에 추가한 "homepage" URL 값으로 설정된다

`+` 추가적인 방법으로 HashRoute를 사용할 수 있다.


참조문서
https://medium.com/@_diana_lee/react-react-router-%EC%A0%81%EC%9A%A9%ED%95%9C-react-%EC%95%B1%EC%9D%84-github-pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EB%8A%94-%EB%B2%95-5f6119c6a5d9    
https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819
</details>
<br/>
<hr/>


## `주소창 URL 직접 라우팅시 404에러 (HTML5 pushState historyAPI)`
<details>
<summary>[ 상세보기 ]</summary>
　

### `근본 원인 `
새로고침시에는 영향이 없으나 주소창 URL을 선택하고 Enter 했을 때 
혹은 주소를 직접 입력하여 라우팅 했을 때 404 에러를 발생한다.
Create React App Docs를 보면 client-side routing에 대한 노트가 적혀있다.    
github pages는 Html5 `pushState` history API를 사용하는 라우터를 지원하지 않는다고 나와있다.

일반적인 HTML5 history API는 사용자가 방문한 페이지의 기록을 관리해주는 기능을 제공하는 웹 브라우저 API로 window.hisotry.back(), forward(), go() 등의 메서드를 이용해 브라우저 뒤로가기, 앞으로가기 등의 기능을 구현할 수 있게 해준다.
이러한 history API에는 pushState(), replaceState()라는 메소드를 함께 제공하며, pushState는 히스토리 엔트리에 새로운 페이지 엔트리를 추가, replaceState는 페이지 새로고침 없이 현재의 히스토리 엔트리를 변경하여 URL만 이동할 수 있도록 해준다.

React의 react-router-dom의 BrowserRouterrk history API를 사용하여 UI를 업데이트한다.
그러나 Github Pages에서 해당 API 기능을 제공하지 않으므로 새로운 페이지 렌더링 없이 URL만 이동하는것이 불가능하다.
URL변경시 단순히 변경만 이루어지는것이 아닌 Github Pages server로 서브디렉토리의 라우팅을 요청하게 되고, server는 히스토리 정보를 알지 못하기 때문에 404 에러를 반환하게 된다.

### `해결책`

404 redirect handling을 한다.
github pages에서는 404에러시 내부적으로 404.html파일을 포워딩 한다.
따라서 해당 파일에 script를 통해 url 쿼리스트링을 변경하고 
index.html에서도 script를 통해 404.html에서 변경된 URL 쿼리스트링을 받아 해석하고 올바른 URL로 변환할  수 있도록 구현한다.

[ `public/404.html` ]

```html
<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">
      <title>Single Page Apps for GitHub Pages</title>
      <script type="text/javascript">
          // Single Page Apps for GitHub Pages
          // https://github.com/rafrex/spa-github-pages
          // Copyright (c) 2016 Rafael Pedicini,  licensed under the MIT License
          //  ---------------------------------------------- ------------------------
          // This script takes the current url and  converts the path and query
          // string into just a query string, and then  redirects the browser
          // to the new url with only a query string  and hash fragment,
          // e.g. http://www.foo.tld/one/two?a=b& c=d#qwe, becomes
          // http://www.foo.tld/?p=/one/two&  q=a=b~and~c=d#qwe
          // Note: this 404.html file must be at least  512 bytes for it to work
          // with Internet Explorer (it is currently >  512 bytes)

          // If you're creating a Project Pages site  and NOT using a custom domain,
          // then set segmentCount to 1 (enterprise   users may need to set it to > 1).
          // This way the code will only replace the  route part of the path, and not
          // the real directory in which the app  resides, for example:
          //  https://username.github.io/repo-name/one/two?  a=b&c=d#qwe becomes
          // https://username.github.io/repo-name/? p=/one/two&q=a=b~and~c=d#qwe
          // Otherwise, leave segmentCount as 0.
          var segmentCount = 1;

          var l = window.location;
          l.replace(
              l.protocol + '//' + l.hostname + (l.port ?   ':' + l.port : '') +
              l.pathname.split('/').slice(0, 1 +  segmentCount).join('/') + '/?p=/' +
              l.pathname.slice(1).split('/').slice  (segmentCount).join('/').replace(/&/g,  '~and~') +
              (l.search ? '&q=' + l.search.slice(1) .replace(/&/g, '~and~') : '') +
              l.hash
          );

      </script>
  </head>
  <body>
  </body>
</html>
```
#### (반드시 MIT licence를 명시해야 한다.)

[ `public/index.html의 head 영역` ]
```html
<head>
//...
 
  <!-- Start Single Page Apps for GitHub Pages -->
  <script type="text/javascript">
    // Single Page Apps for GitHub Pages
    // https://github.com/rafrex/spa-github-pages
    // Copyright (c) 2016 Rafael Pedicini, licensed under the MIT License
    // ----------------------------------------------------------------------
    // This script checks to see if a redirect is present in the query string
    // and converts it back into the correct url and adds it to the
    // browser's history using window.history.replaceState(...),
    // which won't cause the browser to attempt to load the new url.
    // When the single page app is loaded further down in this file,
    // the correct url will be waiting in the browser's history for
    // the single page app to route accordingly.
    (function (l) {
      if (l.search) {
        var q = {};
        l.search.slice(1).split('&').forEach(function (v) {
          var a = v.split('=');
          q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
        });
        if (q.p !== undefined) {
          window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + (q.p || '') +
            (q.q ? ('?' + q.q) : '') +
            l.hash
          );
        }
      }
    }(window.location))
  </script>
  <!-- End Single Page Apps for GitHub Pages -->

</head>
```
</details>
<br/>
<hr/>

# ------------------------Class형 컴포넌트-----------------------

### `Component 클래스 상속`

함수형 컴포넌트의 다양한 훅이 지원되기 전에 사용되었던 방식이다. (현재도 사용은 가능하지만 생명주기관리가 함수형 컴포넌트에 비해어렵다)

```javascript
  import {Component} from 'react'
  export default class App extends Component {

  }
```
위 코드와 같이 구성한다.

react의 Component클래스는 React의 State나 Render 등의 기능을 갖고 있다.   

React의 Component를 상속받아 App클래스를 확장함으로써
해당 기능들을 사용할수 있게 된다.  
<hr/>

### `render 함수`
Class형 컴포넌트에서 특정 컴포넌트나 HTML등으로 구성된 JSX를 렌더링 하기 위한 메소드이다.   
해당 함수 내에서 return을 통해 렌더링 하고자 하는 JSX를 선언해준다.
해당 함수는 Component클래스에 정의된 타입을 오버라이딩 구현함으로써 내부적으로 현재 컴포넌트의 render() 함수에 작성된 코드가 동작된다.

```javascript
export default class App extends Component {
  render() {
    return (
      <h1>클래스형 컴포넌트 render함수 JSX 렌더링</h1>
    )
  }
}
```
<hr/>

### `state`
Class형 컴포넌트에서 사용가능한 변수이다.   
Object 타입으로 컴포넌트가 내부에서 관리하는 데이터이다.    

즉, 컴포넌트 단위별로 특정 변수를 선언해서 관리할 때 state를 사용한다.   

주로 동적인 데이터를 다룰 때 사용한다.    

(변수의 값 변경에 의해 라이프사이클이 작동해야 하는 기능이 있다면 해당 기능에 사용되는 변수를 React Component상에서 관리하는 Object타입의 state변수를 React Component를 상속받음으로써 사용한다.)

```javascript
export default class App extends Component {
  state = {
    count : 0
  }
}
```
count라는 변수를 state라는 react 내부객체에 속성변수로 사용한다.    

해당 값이 변경되면 컴포넌트는 리랜더링된다.   

++) 함수형 컴포넌트에서 useState() 훅을 통해 단일값을 state값으로 관리할때 위와같은 형태의 Object에 새로운 속성으로 추가되어 관리되는것과 같다

exmple code
```javascript
  const [arr, setArr] = useState([1,2,3,4,5])
  const [obj, setObj] = useState({a:1, b:"이"})
```

위의 함수형 컴포넌트의 useState훅은 아래의 클래스형 컴포넌트의 state와 같이 관리된다.

```javascript
  state = {
    arr: [1,2,3,4,5],
    obj: {
      a:1,
      b:"이"
    }
  }
```
<hr/>

### `state 변경 - setState() 함수`
앞서 설명한것과 같이 state변수는 Object타입이다.
react는 state값이 변경되면 rerender된다.
이때 state값을 변경하기 위해서는 값을 직접 변경할 수 없고
setState라는 setter함수를 통해 변경해야만 한다.
따라서 setState를 사용하여 state Object 자체 형태 그대로 수정 해야한다.
(state가 기본적으로 Object타입으로 관리되므로 오류가난다.)

```javascript
  state = {
    count: 0
  }
  this.setState({count:1})
```
위 코드와 같이 state 객체 형태를 그대로 유지하면서
count속성을 지정하고 해당 값을 1로 변경시킨다.    

```javascript
  state = {
    count: 0
  }
  this.setState({a:"에이"})
```
만약 위와같이 전혀 다른 속성값으로 set을 하게된다면
`state값이 {a:"에이"}`로 변경되는게 아닌 기존 state객체를 유지하고
새로운 a속성과 값을 추가한 {count:0, a:"에이"} 와 같은 형태로 수정된다.   

위와 같이 state 기존 Object 형태를 유지하면서 특정 속성을 추가하거나 기존 속성의 값을 변경하면 React는 변경을 감지하고 rerender된다.    
이때 state로 관리하는 특정 속성을 JSX에서 사용하고 있다면, React는 VirtualDom에 의해 해당 위치만 변경시킨다. (렌더링 성능이 최적화됨)

state값의 누적 증가는 아래와 같이 update 할 수 있다.
```javascript
  state = {
    count: 0
  }
  this.setState({count: this.state.count+1});
```
한가지 의문이 들었던것은 state가 Object타입이므로 setState를 한다면
Object 그 자체를 덮어씌운다고 생각을 했다.    
하지만 리엑트의 setState함수는 기존 객체를 유지한체 전달받은 객체를 확인하고
기존 state 객체와 일치하는지 여부를 확인한다.   
만약 일치하지 않는다면 기존 state의 속성이 유지된채로 값만 변경되었는지 혹은 전혀 다른 새로운 속성인지 여부를 각각 판단한다.   
전자의 경우 변경된 부분들을 몽땅 확인하고 업데이트 시킨다.
후자의 경우 기존 속성들을 유지한 채 새로운 속성을 추가한다.

따라서 아래와 같은 코드는 정상적으로 작동하지만 불필요하다.
```javascript
  state = {
    count: 0
  }
  this.setState({...this.state, count: this.state.count+1});
```
위 코드는 state를 유지한채 전개식으로 얕은복제를 해서 기존 state의 속성들을 유지한 채 값을 변경하거나 새로운 속성을 추가하려고 했었다.


또한 클래스형 컴포넌트의 setState도 함수형 컴포넌트의 setState와 동일한 비동기 이기도 하고, 특정 이벤트에서 값을 처리할때 이벤트가 종료되는시점에 일괄처리 되므로 위와 같이 현재 state에 의존하게 되면
setState가 여러번 호출될때 값이 누적으로, 즉 state를 순차적으로 즉시 반영하지 않기 때문에 함수형 업데이트를 사용해야 한다.

```javascript
  state = {
    count: 0
  }
  this.setState(current => ({count: current.count+1}));
```

위 코드에서 current는 최신상태의 this.state를 뜻한다.

아래는 불필요한 state의 전개식을 통한 얕은복제 (정상작동 되지만 state를 전개처리하는 행위는 불필요하다)
```javascript
  state = {
    count: 0
  }
  this.setState(current => ({...current, count: current.count+1})); // 사용하지말것~
```

++) 만약 state에서 관리하는 특정 속성이 Object나 Array타입이라면
해당 속성에는 전개식을 적용한다.
```javascript
  state = {
    obj: { a: 1, b: 2 }
  };
  /* state값의 a값만 변경 */
  this.setState({
    obj: {
      ...this.state.obj,
      a: 2
    }
  });
```
위와같이 전개식을 사용하지 않으면

```javascript
  this.setState({
    obj: {
      a: 2
    }
  });
```
 `obj변수의 값에서 b 속성이 날라간다.` 이는 단순한 원리이다...
<hr/>

### `메소드`
일반적으로 자바스크립트에서 Object객체 내부의 함수나
생성자함수 내부에 선언한 함수를 메소드라고 부른다.
자바스크립트에서의 Class는 일반적인 OOP(객체지향프로그래밍)
에서 객체를 생성하기 위한 설계도면으로써 사용되므로, 클래스 멤버 함수를 객체에서 선언된 함수와 같이 메소드라고 부른다.
클래스 내부 메소드는 객체와 같이 const나 let, var 키워드를 사용하지 않는다.

Object객체 메소드선언
```javascript
const app = {
  add: () => {
    console.log("add")
  },
  minus: () => {
    console.log("minus")
  }
}

app.add(); // 객체의 app메소드 호출
```
생성자함수 메소드선언
```javascript
function App = {
  this.add: () => {
    console.log("add")
  },
  this.minus: () => {
    console.log("minus")
  }
}
const app = new App()
app.add(); // 객체의 app메소드 호출
```
클래스 메소드선언
```javascript
class App {
  add = () => {
    console.log("add")
  }
  minus = () => {
    console.log("minus")
  }
}

const app = new App()
app.add(); // 객체의 app메소드 호출
```

```javascript
export default class App extends Component{
  add = () => {
    console.log("add")
  }
  minus = () => {
    console.log("minus")
  }
}
```
클래스형 컴포넌트에서 함수는 위와같이 선언한다.
<hr/>

### `클래스형 컴포넌트의 LifeCycle`
React는 컴포넌트가 랜더링전,후로 특정 과정을 거친다.
render전, render후, update 등 각 상황에 맞는 LifeCycle메소드가 실행된다

아래와 같은 3가지 라이프사이클이 존재한다.
  1. Mounting
  2. Updating
  3. UnMounting

각각의 라이프사이클에서 순차적으로 동작하는 메소드는 아래와 같다.
  1. Mounting   
      * ```javascript
        constructor()
        ```
      * ```javascript
        static getDerivedStateFromProps()
        ```
      * ```javascript
        render()
        ```
      * ```javascript
        componentDidMount()
        ```

  2. Updating
      * ```javascript
        static getDerivedStateFromProps()
        ```
      * ```javascript
        shouldComponentUpdate()
        ```
      * ```javascript
        render()
        ```
      * ```javascript
        getSnapshotBeforeUpdate()
        ```
      * ```javascript
        componentDidUpdate()

  3. UnMounting
      * ```javascript
        componentWillUnmount()
        ```

`부모 컴포넌트`
```javascript
import {Component} from "react";
import LifeCycle from './LifeCycle';

export default class AppClass extends Component{
  state = {
    isUnmounted: true
  }
  render() {
    return (
      <div>
        {this.state.isUnmounted && <LifeCycle isUnmounted={this.state.isUnmounted}/>}
      </div>
    )
  }
}
```

`자식 컴포넌트`
```javascript
import {Component} from "react";

export default class LifeCycle extends Component {
  
  state={init : 'data'}

  /**
   * 컴포넌트가 최초로 render되기 직전과
   * update에 의해 render되기 직전 호출되는 
   * shouldComponentUpdate 메서드 호출 직전에 호출된다.
   * 
   * props 변화에 대응한 부수효과를 발생시킬때 사용한다.
   * 부모 컴포넌트에서 전달하는 props가 부모컴포넌트 시점에서 변화할 때 마다 
   * 자식컴포넌트에 적용하기 전 일부 데이터를 다시 계산하여 적용하거나,
   * 자식컴포넌트의 state가 변경될 때 기존 props값을 state에 다시 저장하기 위해 사용한다.
   * 이때 return을 통해 자식컴포넌트에 반영하는데, 
   * 덮어 씌워지는것이 아닌 props에 담겨있는 속성을 state에 속성으로서 추가한다.
   * 
   * 이를 통해 부모컴포넌트의 props데이터를 끌어다 사용하는 자식컴포넌트간의 관계를
   * 독립적으로 분리하여 처리가 가능해진다.
   * 
   * @param {*} props - 부모 컴포넌트로 부터 JSX를 통해 전달받는다.
   * @param {*} state - constructor로부터 전달받는다.
   * @returns 
   */
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps 호출")
    return props;
  }

  /**
   * 자바스크립트 클래스 문법 - 가장 최초로 실행된다
   * render되기 전 해당 컴포넌트클래스가 컴파일 되는 시점에
   * React 내부적으로 인스턴스화 될때 실행된다.
   * 따라서 state값을 초기화 할때 사용하면 좋을것 같다.
   * 생성자에서는 직접 state값을 접근하여 초기값 세팅이 가능하다.
   * @param {*} props 
   */
  constructor(props) {
    console.log("1. constructor 호출 - state를 초기화한다.")
    super(props)
    this.state = {count: 0} // 초기화 이므로 기존 state 멤버가 존재한다면 덮어씌움
    console.log(this.state)
  }
  /**
   * 컴포넌트가 render() 함수에 의해 렌더링 된 후 호출된다.
   * render메소드 실행이 완료된 후 호출된다.
   * 초기 render호출시 딱 1번 호출된다.
   */
  componentDidMount() {
    console.log("3. componentDidMount 호출")
    this.setState(curState => ({count: curState.count + 1}));
  }
  /**
   * setState에 의해 state값이 변경되었을 때 
   * 변경으로 인해 render()함수가 호출되기 직전에
   * 변경된 state를 반영할것인지 처리하기 위한 함수
   * 해당 함수에서 false를 처리하면 state값은 변경되지 않으므로
   * render()함수가 호출되지 않게된다.
   * @param {*} props 
   * @param {*} state 
   * @returns 
   */
  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate 호출 ");
    console.log(props)
    console.log(state)
    return true; //true를 반환할 때 바뀐다.
  }

  /**
   * update에 의해 리렌더링 된 결과가 dom에 반영되기 전 호출된다.
   * 반환하는값은 componentDidUpdate에 인자값으로 전달된다.
   * 리렌더링 되기 직전 state 혹은 props값을 
   * 렌더링 이후에 사용해야 하는 기능에 사용할 때 적절해 보인다.
   * @param {*} prevProps 
   * @param {*} prevState 
   * @returns 
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate 호출 ");
    console.log(prevProps)
    console.log(prevState)
    return 1+1;
  }

  /**
   * 컴포넌트가 state변경에 의해 update되었는지가 아니고
   * 단순히 render함수가 초기 호출된 이후
   * shouldComponentUpdate에 의해 반환되는 true값을 통해
   * 컴포넌트가 update 렌더링 되었는지 여부를 파악할것이라 예측됨.
   */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate 호출 - snapshot: "+snapshot)
  }

  /**
   * 컴포넌트가 Dom에서 제거될 때 사용된다.
   * 이를테면 부모컴포넌트에서 bool값 false로 보이지않게 한다던지,
   * 새로고침, 페이지전환을 한다던지 등
   * 함수형 컴포넌트의 useEffect훅에서 cleanUp함수와 동일한 기능을 한다.
   */
  componentWillUnmount() {
    console.log("componentWillUnmount : 컴포넌트가 DOM에서 제거됨")
  }

  render() {
    console.log("2. render 호출 - 컴포넌트 마운트됨 " + JSON.stringify(this.state))
    return <>
    <p>LifeCycle컴포넌트 </p>
     <p>isUnmounted state: {this.state.isUnmounted ? 'true' : 'false'}</p>
     <p>{`count값: ${this.state.count}`}</p>
     </>
    }
}

```

<hr/>

### `axios API 통신 모듈`
```text/plain
PS C:\~ > npm i axios

```

### `axios - fetch 차이`

fetch는 완료된 promise 객체로 부터 json() 함수를 호출하여 response객체를 가져와야하는 반면,
(response는 클래스타입 혹은 생성자함수 객체이며 json함수는 해당 객체의 prototype에 등록됨)
axios는 클래스타입의 response객체가 아닌 일반 Object객체로 데이터를 넘기기 때문에 간편하다는 이점이 있다.
(데이터 타입 혹은 content 타입을 기본값인 json으로 자동으로 파싱해 줌)

```javascript
    const fetchRes = await((await fetch("https://yts-proxy.now.sh/list_movies.json")).json())
    console.log(fetchRes)

    const axiosRes = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    console.log(axiosRes)
```

### `구조 분해 할당과 Alias`

**중첩 구조의 데이터 추출**
```javascript
const json = {data: {data: {movies:[],},},}

const {data: {data: {movies}}} = json
console.log(movies)
```

위와 같이 중첩 구조의 json 데이터에서 특정 계층의 속성 값을 추출하여 변수에 할당하기 위해 사용한다.   
`data.data.movies`를 위와같이 `movies`로 쉽게 가져올 수 있다.   


**구조분해 alias**
```javascript
const json = {data: {data: {movies:[],},},}

const {data: {data: {movies:response}}} = json
console.log(response)
```

위와 같이 구조를 분해하여 할당한 기존 객체의 속성명을 변경하기위해 
: 를 사용하여 분해,할당한 객체속성을 형태화시키고
해당 속성의 리터럴에 대한 별칭을 지정한다.

이것은 ES6 단축 속성명 문법과 연관된다.
<hr/>

### `ES6 - 단축 속성명 문법`
```javascript
const response = []
state = {movies:[]}
this.setState({movies: response})
```
만약 response라는 배열의 변수명이 movies라고 가정한다면 아래와 같이 단축하여 표현할 수 있다.
```javascript
const movies = []
state = {movies:[]}
this.setState({movies})
```
위와 같은 문법을 단축 속성명 문법 이라고 한다.

두 문법은 비슷한 개념이며 서로 연관되어 있다.   
중첩구조 분해 할당시 movies는 `: 콜론`을 통해 객체를 형태와 시키는 것 처럼 보인다    
(해당 객체는 {} 혹은 []일 수 있다)    
`: 콜론`을 통해 형태화 시키기 전 {movies} 는 특정 속성을 나타내는 변수이다.     
구조분해 할당에서 객체를 분해할 때 `: 콜론`을 통해 속성을 1depth 탐색하게 된다.     
movies가 만약 [] 형태의 배열이라면 response는 []을 가리키는 셈..    
즉, 변수 moves를 `: 콜론`을 통해 변수의 내부를 탐색하는데 이를 response라는 별칭의 변수에 저장한것과 같다.
<hr/>

## `클래스 컴포넌트의 라우팅 파라미터`
react-router-dom v6부터 클래스형 컴포넌트는 파라미터를 보낼 수 없다.
useParam Hook을 사용할 수 있도록 함수형 컴포넌트로 한번 감싼 뒤 props로 전달해야한다.

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class AppClass extends Component{
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path='/about/:id' element={<Wrapper element={<About/>}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
```

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Wrapper(props) {
  const param = useParams();
  return React.cloneElement(props.element, {param})
}
```

```javascript
import { Component } from "react";

export default class About extends Component {

  constructor(props) {
    super(props)
    
    this.state = {param:props.param}

  }
  getMovieApi = async (id)=>{
    console.log(id)
  }
  componentDidMount() {
    this.getMovieApi(this.state.param.id)
  }

  render() {
      return (<h1>Detail</h1>)
  }
}

```
<hr/>

## `클래스 컴포넌트의 state와 useLocation`

기존 v5 state

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class Example extends Component{
  render() {

    return (
      <Link to={{
        pathname:"/state"
        state: {data:"example"}
      }}>
        state
      </Link>
    )
  }
}
```
Link태그의 to 옵션에 object형태로 pathname과 함께 전송이 가능했다.    
```javascript
import {Component} from 'react'
import {Link} from 'react-router-dom'
export default class App extends Component{
  render() {
    
    return (
      <BrowserRouter>
        <Routes>
          <Route path={`/state`} element={<State/>}/>
        </Routes>
      </BrowserRouter>
      )
  }
}
```
라우팅을 지정해 주고    

```javascript
import { Component } from "react";

export default class State extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {location: props.location}

  }

  render() {
    return (
    <h1>{this.state.location.state.title}</h1>
    )
}
}
```
컴포넌트에서 props를 통해 라우트로부터 location, history 객체들을 받는다.

```javascript
import {Component} from 'react'
import {Link} from 'react-router-dom'
export default class App extends Component{
  render() {
    
    return (
      <BrowserRouter>
        <Routes>
          <Route 
            path={`/state`} 
            element={<Wrapper element={<State/>}}
            />
        </Routes>
      </BrowserRouter>
      )
  }
}
```
위와 같이 Wrapping방식으로 라우팅 처리한다.

```javascript
import React from 'react';
import { useLocation } from 'react-router-dom'; //useLocation 훅을 사용

export default function Wrapper(props) {
  const location = useLocation(); // location객체 안에 state가 담겨있다
  return React.cloneElement(props.element, {location})//props를 통해 state값이 담긴 location객체 전달
}
```
useLocation훅을 사용하여 받는다
useLocation훅으로 location객체를 리턴받는데, 해당 객체 안에 state값이 담겨있다.
<hr/>

## `클래스형 컴포넌트의 Redirect`

기존 v5 에서는 history객체의 push() 함수를 통해 redirect했다.
```javascript
import { Component } from "react";

export default class State extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {location: props.location, history: props.history}
  }

  componentDidMount() {
    if(this.location.state === undefined) {
      this.history.push("/")
    }
  }

  render() {
    return (
    <h1>{this.state.location.state.title}</h1>
    )
}
}
```
위와같이 location객체처럼 라우트로부터 history객체를 props로 받아 사용이 가능했으나,

v6 버전부터는 함수형 컴포넌트에서 useNavigate 훅을 사용해야 redirect가 가능해졌다.

```javascript
import { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

export default function Redirect({path}) {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate(path)
  },[])
}
```
위 코드와 같이 해당 컴포넌트가 렌더링 되면 useEffect에 의해 useNavigate훅을 호출하여 리다이렉트 처리한다.

```javascript
import { Component } from "react";
import Redirect from "./Redirect";

export default class Detail extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {location: props.location}

  }

  render() {
    if (this.state.location.state == null) {
      return (<Redirect path={`${process.env.PUBLIC_URL}/ver2`}/>) // 클래스형 컴포넌트에서는 redirect를 컴포넌트를 통해 거쳐 실행시킨다...
    }

    return (
    <h1>{this.state.location.state.title}</h1>
    )
}
}
```
해당 함수는 JSX로 Render하는 방식으로 구현했다.

클래스형 컴포넌트에서는 기본 훅을 커스텀 훅을 통해 클래스에서 호출하더라도
클래스에서는 기본 훅을 호출하는것과 다름없기 때문에, 오류가 발생한다.
(클래스형 컴포넌트에서는 함수형 컴포넌트 방식의 훅을 호출할 수 가 없다.)