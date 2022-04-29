import React from "react";
import Tittle from "../components/layouts/Tittle";
import Btn from "../styles/LinkButton.module.css";
import LinkButton from "../components/layouts/LinkButton";
import styles from "../styles/Cart.module.css";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.2;
  const totalPrice = itemsPrice - taxPrice;
  return (
    <div>
      <Tittle text1="Meu" text2="Carrinho." />
      <div className={styles.cart}>
        {cartItems.length === 0 && <div>Carrinho Vazio</div>}
        {cartItems.map((item) => (
          <>
            <div key={item.id} className={styles.items}>
              <div className={styles.col}>
                <span className={styles.prod}>Produto: </span>
                {item.name}
              </div>
              <div>
                <button
                  className={styles.btnred}
                  onClick={() => onRemove(item)}
                >
                  -
                </button>{" "}
                <button className={styles.btngreen} onClick={() => onAdd(item)}>
                  +
                </button>
              </div>
              <div className={styles.coltext}>
                R$ {item.qty} x {item.price.toFixed(2)}
              </div>
            </div>
          </>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className={styles.line}></div>
            <div className={styles.items}>
              <strong>Valor dos Produtos:</strong>
              <div>{`R$ ${itemsPrice.toFixed(2)}`}</div>
            </div>
            <div className={styles.items}>
              <strong>Desconto:</strong>
              <div>{`R$ ${taxPrice.toFixed(2)}`}</div>
            </div>

            <div className={styles.items}>
              <div>
                <strong>Total:</strong>
              </div>
              <div>
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.buttons}>
              <LinkButton to="/" text="Voltar" />
              <button
                className={Btn.btn}
                onClick={() => alert("Implementação Futura!")}
              >
                Comprar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cart;
