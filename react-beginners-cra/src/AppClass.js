import {Component} from 'react';
import axios from "axios"
import Home from './class/routes/Home';
import Wrapper from './class/routes/Wrapper';
import About from './class/routes/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path='/about/:id' element={<Wrapper element={<About/>}/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}