import React from 'react';
import { useState } from 'react';


export default function Navegacao() {
  const [msg, setMsg] = useState([]);
  const [render, setRender] = useState(false);
  const [elementos, setElementos] = useState(false);




  async function enviopedidos(event) {
    event.preventDefault();

    let formData = new FormData(event.target);

    const url = "http://localhost:4000/produto";

    fetch(url, {
      method: "POST",
      body: formData
    }).then((response) => response.json()).then((dados) => {
      setElementos(dados);

   
   });
   setRender(!render);
   setTimeout(() =>{
     setElementos(true)
   }, 500);


   }

  return (<div>
    <header className="navbar">
      <div className="container-fluid">
        <a className="link" href="Navegacao">Ful Stack Eletro</a>
        <a className="link" href="Produtos">Produto</a>
        <a className="link" href="Pedido">Pedido</a>
        <a className="link" href="Endereço">Loja</a>
        <a className="link" href="Formulario">Contato</a>
        <button class="navbar-toggler bg-info" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

    </header>

    <h1>Realize seu pedido em nosso site!</h1><br />

    <div className="container-pedido">
      <div className="row">

        <div className="col">
          <form onSubmit={enviopedidos}>
            <label for="Nome">Nome</label>
            <input type="text" className="form-control w-400p-2" name="nomeCliente" placeholder="digite seu nome"></input><br />
            <label for="Endereço">Endereço</label>
            <input type="text" className="form-control w-400 p-2" name="endereco" placeholder="digite seu endereço"></input><br />
            <label for="Telefone">Telefone</label>
            <input type="text" className="form-control w-400 p-2" name="telefone" placeholder="digite seu telefone"></input><br />
            <label for="NomeProduto">NomeProduto</label>
            <input type="text" className="form-control w-400 p-2" name="nomeProduto" placeholder="digite seu produto"></input><br />
            <label for="ValorUnitario">ValorUnitario</label>
            <input type="text" className="form-control w-400 p-2" name="valorUnitario" placeholder="digite valor unitario"></input><br />
            <label for="Quantidade">Quantidade</label>
            <input type="text" className="form-control w-400 p-2" name="quantidade" placeholder="digite a quantidade"></input><br />
            <label for="ValorTotal">ValorTotal</label>
            <input type="text" className="form-control w-400 p-2" name="valorTotal" placeholder="digite valor total"></input><br />
            <button type="submit" class="btn btn-danger  m-1">Enviar</button>
            {
      elementos && <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
        Agradecemos!!</div>
    }
          </form>
        </div>
      </div>
    </div>
   
  </div>


  );
}
 
