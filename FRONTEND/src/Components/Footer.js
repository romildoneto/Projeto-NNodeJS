import React from 'react';
import imagem3 from './imagem3.png';

class Footer extends React.Component{
// function Navegacao(){
   render(){
return(
  
   <div className="jumbotron">
   <div className="Footer">
      <footer>
         <p><b>Formas de pagamento:</b></p>
        <div className="imgcartao"> <img src={imagem3} alt="imagem3" width="100px"/></div>
         <p>&copy;Recode Pro</p>
       </footer>
    </div>
    </div>
   )
 }
};
export default Footer;