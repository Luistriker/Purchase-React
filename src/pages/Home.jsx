import styles from "../styles/Home.module.css";
import Carousel from "../components/layouts/Carousel";
import Tittle from "../components/layouts/Tittle";

function Home(props) {
  const { products, onAdd } = props;
  return (
    <section className={styles.container}>
      <Tittle text1="Action" text2="Figures." />
      <div className={styles.carousel}>
        {products.map((product) => (
          <Carousel key={product.id} product={product} onAdd={onAdd}></Carousel>
        ))}
      </div>

      {/* <Carousel /> */}
    </section>
  );
}
export default Home;
