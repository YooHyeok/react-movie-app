import Button from "../../Button"
import styles from "../UseEffect.module.css"

export default function UseEffect() {
  return (
    <div>
      <h1>UseEffect Example</h1>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="Continue"/>
    </div>
  )
}