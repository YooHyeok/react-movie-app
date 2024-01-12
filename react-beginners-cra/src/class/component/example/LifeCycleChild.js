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
   */
  componentWillUnmount() {
    console.log("componentWillUnmount : 컴포넌트가 DOM에서 제거됨")
  }

  render() {
    console.log("2. render 호출 - 컴포넌트 마운트됨 " + JSON.stringify(this.state))
    return <>
    <p>LifeCycle 자식 컴포넌트 </p>
     <p>isUnmounted state: {this.state.isUnmounted ? 'true' : 'false'}</p>
     <p>{`count값: ${this.state.count}`}</p>
     </>
    }
}