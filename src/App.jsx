import "./App.css";
import { ItemListContainer } from "./Container/section/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./Container/section/ItemDetailContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";

import { CartContext, CartProvider } from "./Context/CartContext";

function App() {
  const onAdd = (stock) => console.log("Stock actual:  " + stock);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Hamti cocina con amor"} />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting={"Hamti cocina con amor"} />}
            />
            <Route
              path="/item/:id"
              element={<ItemDetailContainer onAdd={onAdd} />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="*" element={"404 Page not found"} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
