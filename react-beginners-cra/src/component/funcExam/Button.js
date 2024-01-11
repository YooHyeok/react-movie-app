import PropTypes from "prop-types"; //npm i prop-types
import styles from "./Button.module.css"; // cra가 ~.module.css 파일에 들어있는 css코드를 javascript object로 변환시켜준다.
import {useState,useEffect} from "react"

function Button({text}) {

  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const onClick=()=>setValue(prev=>prev+1)
  const onChange=(event)=>setKeyword(event.target.value)
  useEffect(() => {
      console.log("I run only once.")
  }, [])
  useEffect(() => {
    console.log("I run when 'keyword' changes", keyword)
  }, [keyword])
  useEffect(()=>{
    console.log("I run when 'counter' changes")
  }, [counter])
  useEffect(()=>{
    console.log("I run when 'keyword' & 'counter' changes")
  }, [keyword, counter])
  return (
  <div>
    <input onChange={onChange} value={keyword} type="text" placeholder="Search here..."/>
    <h1>{counter}</h1>
    <button onClick={onClick} className={styles.btn}>{text}</button>
  </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button // 컴포넌트를 모듈시스템을 통해 내보내기 - 다른 컴포넌트에서 import문으로 참조가 가능
