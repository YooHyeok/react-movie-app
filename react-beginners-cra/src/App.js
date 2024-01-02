import Button from "./Button"
import styles from "./App.module.css"
import { useEffect, useState } from "react";

function Hello() {

  const byeFn = () => console.log("destroyed :(")

  const hiFn = () => {
    console.log("crated :)")

    /**
     * useEffect의 cleanUp
     * 컴포넌트 destory시 실행된다.
     */
    return byeFn;
  }

  useEffect(hiFn, [])
  
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
