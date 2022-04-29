import styles from "../../styles/Carousel.module.css";
function Carousel(props) {
  const { product, onAdd } = props;
  return (
    <div
      className={product.promo === 1 ? styles.item : styles.promo}
      key={product.id}
    >
      <img src={`src/img/${product.image}.jpg`} alt={product.name} />
      <div className={styles.info}>
        <span className={styles.name}>{product.name}</span>
        <span className={product.promo === 0 ? styles.oldPrice : ""}>
          {product.promo === 0 ? "Promoção" : ""}
        </span>
        <button
          onClick={() => onAdd(product)}
          className={styles.btn}
        >{`R$ ${product.price}.00 cart`}</button>
      </div>
    </div>
  );
}
export default Carousel;
