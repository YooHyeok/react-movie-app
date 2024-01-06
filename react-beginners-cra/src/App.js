import ExamCombine from "./component/example/ExamCombine";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {

  return (
    <Router>
      {/* <ExamCombine/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie" element={<Detail/>}/>
        </Routes>
      </Router>
    )
}

export default App;
