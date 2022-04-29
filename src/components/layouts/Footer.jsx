import styles from "../../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.wave} id={styles.wave1}></div>
        <div className={styles.wave} id={styles.wave2}></div>
        <div className={styles.wave} id={styles.wave3}></div>
        <div className={styles.wave} id={styles.wave4}></div>
      </div>
      <ul className={styles.social_icon}>
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <ul className={styles.menu}>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Cadastrar</a>
        </li>
      </ul>
      <p>Created By LuisFelipe | © 2022 All rights reserved.</p>
    </footer>
  );
}
export default Footer;
