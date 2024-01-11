import { Component } from "react";
import  LifeCycleChild from "./LifeCycleChild"
export default class LifeCycleParent extends Component{

  state = null;

  constructor(props) {
    super(props)
    console.log("부모 컴포넌트 constructor 호출")
    this.state={
      isUnmounted: true
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("부모 컴포넌트 getDerivedStateFromProps 호출")
    console.log(props)
    return props;
  }
  
  componentDidMount() {
    console.log("부모 컴포넌트 componentDidMount 호출")
    this.setState(curState => ({count: curState.count + 1}));
  }
  
  shouldComponentUpdate(props, state) {
    console.log("부모 컴포넌트 shouldComponentUpdate 호출 ");
    console.log(props)
    console.log(state)
    return true; //true를 반환할 때 바뀐다.
  }

  
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("부모 컴포넌트 getSnapshotBeforeUpdate 호출 ");
    console.log(prevProps)
    console.log(prevState)
    return 1+1;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("부모 컴포넌트 componentDidUpdate 호출 - snapshot: "+snapshot)
  }

  /**
   * 컴포넌트가 Dom에서 제거될 때 사용된다.
   * 이를테면 부모컴포넌트에서 bool값 false로 보이지않게 한다던지,
   * 새로고침, 페이지전환을 한다던지 등
   */
  componentWillUnmount() {
    console.log("부모 컴포넌트 componentWillUnmount : 컴포넌트가 DOM에서 제거됨")
  }
  unMount = () => {
    this.setState(curState => ({isUnmounted: !curState.isUnmounted}));
  }
  render() {
    return (
      <div>
        <p>LifeCycle 부모 컴포넌트 </p>
        <button onClick={this.unMount}>UnMount</button>
        <hr/>
        {this.state.isUnmounted && <LifeCycleChild isUnmounted={this.state.isUnmounted}/>}
      </div>
    )
  }
}