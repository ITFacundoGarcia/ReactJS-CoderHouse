import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer"

function App() {
  return (
    <>
  <NavBar/>
  <ItemListContainer saludo = {"Hola! Este es el espacio donde se encontrarán nuestros productos!"}/>
  </>
  );
}

export default App;
