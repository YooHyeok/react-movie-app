import {Component} from 'react';

/**
 * React Component를 상속받아 App클래스를 확장함으로서
 * React Component의 State와 Render 등 많은 기능들을 사용할 수 있게 된다.
 * Class컴포넌트는 React Component 의 render메소드를 통해 렌더링한다.
 */
export default class AppClass extends Component{

  /**
   * Class형 컴포넌트에서 사용가능한 state변수
   * Object타입으로 컴포넌트가 내부에서 관리하는 데이터를 나타낸다.
   * 
   * 즉 컴포넌트 단위별로 특정 변수를 선언해서 관리할때 state를 사용한다.
   * (변경된 값에 의해 라이프사이클이 작동되야 하는 기능이 있다면 
   * 해당 기능에 사용되는 변수를 React Component를 상에서 관리하는 
   * 
   * Object타입의 state 변수를 React Component를 상속받음으로써 사용한다.)
   * 주로 동적인 데이터를 다룰 때 사용한다.
   */
  state = {
    count:0
  }

  add = () => {
    console.log("add")
  }
  minus = () => {
    console.log("minus")
  }

  /**
   * Class형 컴포넌트에서 특정 컴포넌트나 HTML 등의 JSX를 렌더링 하기 위한 메소드
   */
  render() {
    return (
      <div>
        <h1>
          The number is: {this.state.count }
          {/* 클래스 이므로 this키워드로 접근 */}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}