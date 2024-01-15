import {Component} from 'react';
import Wrapper from './class/routes/Wrapper';
import About from './class/routes/About';
import Home1 from "./function/routes/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';

// https://yts-proxy.now.sh/list_movies.json

/**
 * React Component를 상속받아 App클래스를 확장함으로서
 * React Component의 State와 Render 등 많은 기능들을 사용할 수 있게 된다.
 * Class컴포넌트는 React Component 의 render메소드를 통해 렌더링한다.
 */
export default class AppClass extends Component{
  
  render() {
    return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path={`/`} element={<Home1/>}/>
          <Route path='/about/:id' element={<Wrapper element={<About/>}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}