import React from 'react';

 class Navegacao extends React.Component {
   // function Navegacao(){
   render() {
      return (

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

            <div className="main">
               <h2>Sejam bem vindos!</h2>
               <p>Aqui em nossa loja <b>progamador tem desconto...</b></p>
            </div>

         </header>

      )
   }
}

export default Navegacao;