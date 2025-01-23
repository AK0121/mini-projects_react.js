import {useState} from 'react'
import styles from "./Styles/calculator.module.css"

function Calculator() {
  const [inputvalue, setinputvalue] = useState("");

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    let answers = eval(inputvalue);
    setinputvalue(answers);
  }

  function clear() {
    setinputvalue("");
  }

  return (
    <form className={styles.calculator} name="calc">
      <input type="text" className={styles.value} value={inputvalue} readOnly />
      <span className={styles.clear} onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className={`${styles.plus} ${styles.num}`} onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className={`${styles.equal} ${styles.num}`} onClick={() => calculate()}>
        =
      </span>
    </form>
  );
}

export default Calculator;