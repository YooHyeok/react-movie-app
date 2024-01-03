import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Hello() {
  useEffect(()=>{
    console.log("hi! :)")
    return () => console.log("bye~ :(") //useEffect의 cleanup함수 : Hello 컴포넌트 destroy시 실행됨
  }, [])
  return <h1>Hello</h1>
}

function App() {

  /* CleanUp Example */
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev=>!prev)

  /* To Do List */
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setToDo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault();// button 클릭시 form의 기본 submit 이벤트 방지
    if(toDo === "") {
      return
    }
    // toDos.push(toDo)
    // setToDos([...toDos, toDo])
    setToDos(currentArray => [toDo, ...currentArray]) // 전개식을 사용한다면 역순으로 추가할 수 있다.
    setToDo(current => current = "")
  }
  console.log(toDos)

  return (
    <div>
      <h1>UseEffect Example</h1>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="Continue"/>
      <hr/>

      <h1>CleanUp Example</h1>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing && <Hello/>}
      <hr/>

      <h1>To Do List {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
