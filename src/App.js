import React, {Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Componentes/header/header";
import Tareas from "./Componentes/ToDo/ToDo";
import ListaDibujada from "./Componentes/ToDo/ListaDibujada";
import Item from "./Componentes/ToDo/Items";

function App() {
  return (
    <Fragment>
      <Header/>
      <Tareas/>
      <ListaDibujada/>
      <Item/>
    </Fragment>
  );
}

export default App;
