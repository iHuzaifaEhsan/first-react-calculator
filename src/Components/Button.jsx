import React from "react";
import styles from "./Button.module.css";

const Button = ({ btnClick }) => {
  const buttonNames = [
    "1",
    "2",
    "C",
    "3",
    "4",
    "+",
    "5",
    "6",
    "-",
    "7",
    "8",
    "*",
    "0",
    "9",
    "/",
    "=",
    ".",
  ];
  return (
    <div>
      <center>
        {buttonNames.map((items, index) => (
          <button onClick={btnClick} key={index} className={styles.button}>
            {items}
          </button>
        ))}
      </center>
    </div>
  );
};

export default Button;
