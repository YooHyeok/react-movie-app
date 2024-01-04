import { useEffect, useState } from "react";

export default function ToDoList() {

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

  return(
    <div>
      <h1>To Do List {toDos?.length}</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((todo,index)=> <li key={index}>{todo}</li>)}
      </ul>
    </div>
    
  )
}