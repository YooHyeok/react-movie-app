import PropTypes from "prop-types"; //npm i prop-types
import styles from "./Button.module.css"; // cra가 ~.module.css 파일에 들어있는 css코드를 javascript object로 변환시켜준다.

function Button({text}) {
  return <button className={styles.btn}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button // 컴포넌트를 모듈시스템을 통해 내보내기 - 다른 컴포넌트에서 import문으로 참조가 가능
