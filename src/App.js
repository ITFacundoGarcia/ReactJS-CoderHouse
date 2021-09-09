import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer"
import Cards from "./components/Cards/Cards"

function App() {
  return (
  <>
  <NavBar/>
  <ItemListContainer saludo = {"Hola! Este es el espacio donde se encontrarán nuestros productos!"}/>
  <Cards/>
  </>
  );
}

export default App;
