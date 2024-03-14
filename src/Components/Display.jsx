import styles from "./Display.module.css";

const Display = ({val}) => {
  return <input value = {val} className={styles.display} type="text" readOnly/>;
};

export default Display;
