import {Component} from 'react';
import LifeCycleParent from './component/classExam/LifeCycleParent';

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
    count:0,
    a: 0,
  }

  add = () => {
    /**
     * state와 reRender
     * 새로운 state를 받아야 reRender된다.
     * 따라서 setState에는 새로운 state 그 자체 형태로 다시 반환해야한다.
     * 이를테면 인자값은 state 그 자체의 값을 의미하므로
     * 이전 객체 형태에 전개식 등을 사용하여 특정 속성의 데이터를 변경만 하고
     * 객체를 유지하여 update처리한다
     * 이로써 새로운 객체를 넣었으므로 reRender된다.
     * 만약 값이 그대로인 객체를 전달하더라도 reRender된다.
     */
    this.setState({a:1});
    // this.setState({count: this.state.count+1});
    // this.setState({...this.state, count: this.state.count+1}); // 불필요한 state의 얕은 병함
    /* this.setState(curState => 
      ({...curState, count: curState.count+1})); */
      this.setState(curState => ({count: curState.count+1}));
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
          The number is: {this.state.count}
          {/* 클래스 이므로 this키워드로 접근 */}
        </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
        <hr/>
        {<LifeCycleParent count={0}/>}
      </div>
    )
  }
}