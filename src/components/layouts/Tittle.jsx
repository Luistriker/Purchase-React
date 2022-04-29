import styles from "../../styles/Tittle.module.css";
function Tittle(props) {
  return (
    <div className={styles.tittle}>
      <h1>
        {props.text1} <span>{props.text2}</span>
      </h1>
    </div>
  );
}
export default Tittle;
