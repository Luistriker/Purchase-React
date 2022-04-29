import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "../../styles/Navbar.module.css";
import logo from "../../img/toys.png";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

function Navbar(props) {
  const [isMobile, setIsMobile] = useState(true);
  const click = () => setIsMobile(!isMobile);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Toys" />
      </Link>
      <nav id="nav" className={isMobile ? styles.nav : styles.nav_active}>
        <Container>
          <button id="btn_mobile" className={styles.btn_mobile} onClick={click}>
            <div className={styles.hamburguer}></div>
          </button>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Sobre</Link>
            </li>
            <li>
              <Link to="/">Cadastrar</Link>
            </li>
            <li>
              <Link to="/cart">
                {props.countCartItems ? (
                  <h3>{props.countCartItems}</h3>
                ) : (
                  <FaShoppingCart className={styles.car} />
                )}
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
export default Navbar;
