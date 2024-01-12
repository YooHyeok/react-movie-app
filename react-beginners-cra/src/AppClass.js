import {Component} from 'react';
import ClassComponent from './component/classExam/ClassComponent';

/**
 * React Component를 상속받아 App클래스를 확장함으로서
 * React Component의 State와 Render 등 많은 기능들을 사용할 수 있게 된다.
 * Class컴포넌트는 React Component 의 render메소드를 통해 렌더링한다.
 */
export default class AppClass extends Component{
  
  state = {isLoading: true}

  componentDidMount() {
    setTimeout(()=>{
      this.setState({isLoading:false})
    },6000)
  }

  /**
   * Class형 컴포넌트에서 특정 컴포넌트나 HTML 등의 JSX를 렌더링 하기 위한 메소드
   */
  render() {
    const {isLoading} = this.state
    return (
      <div>
         {/* <ClassComponent/> */}
          {isLoading ? "Loading" : "We Are Ready"}
      </div>
    )
  }
}