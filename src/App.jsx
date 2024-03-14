import React from "react";
import styles from "./App.module.css";
import Display from "./Components/Display";
import Button from "./Components/Button";
import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");

  const btnClick = (event) => {
    let e = event.target.innerText;
    if (e === "C") {
      setVal("");
    } else if (e === "=") {
      setVal(eval(val));
    } else {
      let newVal = val + event.target.innerText;
      setVal(newVal);
    }
  };

  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.calculator}`}>
        <Display val={val}></Display>
        <Button btnClick={btnClick}></Button>
      </div>
    </div>
  );
};

export default App;
