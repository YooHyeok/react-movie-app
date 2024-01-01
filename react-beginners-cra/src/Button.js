import PropTypes from "prop-types"; //npm i prop-types

function Button({text}) {
  return <button style={{
    backgroundColor:"tomato",
    color: "white"
  }}>{text}</button>
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}

export default Button // 컴포넌트를 모듈시스템을 통해 내보내기 - 다른 컴포넌트에서 import문으로 참조가 가능