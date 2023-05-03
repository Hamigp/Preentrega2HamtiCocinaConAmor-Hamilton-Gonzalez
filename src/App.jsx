import './App.css';
import { ItemListContainer } from './Container/ItemListContainer';
import  NavBar  from './Componets/NavBar';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Hamti cocina con amor"} />
    
        </div>
  );
}

export default App;
