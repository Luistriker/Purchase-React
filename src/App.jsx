import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "./components/layouts/Container";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import db from "./data/db";
import { useState } from "react";

function App() {
  const { products } = db;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Router>
      <Navbar countCartItems={cartItems.length} />

      <Container customClass="min_height">
        <Routes>
          <Route
            path="/"
            element={<Home products={products} onAdd={onAdd} />}
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
