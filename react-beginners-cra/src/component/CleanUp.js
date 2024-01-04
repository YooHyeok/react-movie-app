import { useEffect, useState } from "react";

function Hello() {
  useEffect(()=>{
    console.log("hi! :)")
    return () => console.log("bye~ :(") //useEffect의 cleanup함수 : Hello 컴포넌트 destroy시 실행됨
  }, [])
  return <h1>Hello</h1>
}

export default function CleanUpEx() {

  /* CleanUp Example */
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev=>!prev)

  return(
    <div>
      <h1>CleanUp Example</h1>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing && <Hello/>}
    </div>
  )
}