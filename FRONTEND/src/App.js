import React from 'react';
import './Components/Estilo.css';
import Navegacao from './Components/Navegacao';
import Formulario from './Components/Formulario';
import Endereço from './Components/Endereço';
import Produtos from './Components/Produtos';
import Pedido from './Components/Pedido';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Swuit, Route } from 'react-router-dom';


//  class App extends React.Component(){
//   render(){
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/"><Navegacao /></Route>
        <Route exact path="/Navegacao"><Navegacao /></Route>
        <Route exact path="/Formulario"><Formulario /></Route>
        <Route exact path="/Endereço"><Endereço /></Route>
        <Route exact path="/Produtos"><Produtos /></Route>
        <Route exact path="/Pedido"><Pedido /></Route>
        <Footer />

      </div>
    </Router>
  )
};

export default App;
