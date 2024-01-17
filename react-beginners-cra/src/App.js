import {Component} from 'react';
import Home2 from './class/routes/Home';
import Wrapper from './class/routes/Wrapper';
import About from './class/routes/About';
import Home1 from "./function/routes/Home";
import Detail1 from "./function/routes/Detail";
import Detail2 from "./class/routes/Detail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import "./App.css"

// https://yts-proxy.now.sh/list_movies.json

/**
 * React Component를 상속받아 App클래스를 확장함으로서
 * React Component의 State와 Render 등 많은 기능들을 사용할 수 있게 된다.
 * Class컴포넌트는 React Component 의 render메소드를 통해 렌더링한다.
 */
export default class AppClass extends Component{
  
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation/>
        <Routes>
          <Route path={`/about`} element={<About/>}/>
          <Route path={`/ver1`} element={<Home1/>}/>
          <Route path={`/movie/:id`} element={<Detail1/>}/>
          <Route path={`/ver2`} element={<Home2/>}/>
          <Route path={`/detail/:id`} element={<Wrapper element={<Detail2/>}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}