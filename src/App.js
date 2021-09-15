import { BrowserRouter, Switch, Route } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer"
import { Cart } from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";

function App() {
  return (
  <BrowserRouter>
    
    <div className="app">
      <NavBar/>

      
      <Switch>
          <Route exact path='/'>
              <ItemListContainer saludo = {"Hola! Este es el espacio donde se encontrarán nuestros productos!"}/>
          </Route>

          <Route path="/categoria/:idCategoria" component={ItemListContainer}/>

          <Route exact path='/cart'>
            <Cart/>
          </Route>
      </Switch>

      <ItemDetailContainer/>

    </div>
  </BrowserRouter>

  );
}

export default App;
