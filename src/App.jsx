import "./App.css";
import { ItemListContainer } from "./container/section/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./container/section/ItemDetailContainer";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const onAdd = (stock) => console.log("Stock actual:  " + stock);

  return (
    <BrowserRouter>
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
