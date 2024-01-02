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
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev=>!prev)
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="Continue"/>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing && <Hello/>}
    </div>
  );
}

export default App;
