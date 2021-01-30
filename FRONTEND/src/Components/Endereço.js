import React from 'react';

class Endereço extends React.Component{
// function Navegacao(){
   render(){
return(
  
  <div>
<header className="navbar">

<div className="container-fluid">
   <a className="link" href="Navegacao">Full Stack Eletro</a>
   <a className="link" href="Produtos">Produto</a>
   <a className="link" href="Pedido">Pedido</a>
   <a className="link" href="Endereço">Loja</a>
   <a className="link" href="Formulario">Contato</a>
   <button class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarNav"
         aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
</div>


<h1>Nossos Endereços</h1>

<div className="container">
<div className="local">
   <h2>Rio de Janeiro</h2>
   <ul className="list-group">
   <li className="list-group-item list-group-item-white">Rua dos carneiros nº 48</li>
   <li  className="list-group-item list-group-item-white">Zona Leste</li>
   <li  className="list-group-item list-group-item-white">(81)90056-9987</li>
   </ul>
   </div>

<div className="local">
   <h2>São Paulo</h2>
   <ul className="list-group">
   <li  className="list-group-item list-group-item-white">Avenida dos Bandeirantes nº 1200</li>
   <li  className="list-group-item list-group-item-white">Morumbi</li>
   <li  className="list-group-item list-group-item-white">(81)98856-9987</li>
   </ul>
   </div>

<div className="local">
   <h2>Pernambuco</h2>
   <ul className="list-group">
   <li  className="list-group-item list-group-item-white">Estrada do Jacarabdá nº 10</li>
   <li  className="list-group-item list-group-item-white">Centro</li>
   <li  className="list-group-item list-group-item-white">(81)98856-9987</li>
   </ul>
</div>
</div>
</header>
</div>

)
}  
}

export default Endereço;