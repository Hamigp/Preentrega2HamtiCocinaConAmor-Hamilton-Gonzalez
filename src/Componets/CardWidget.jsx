import React from "react";
import Carrito from "../Assets/img/Carrito.png"
const CardWidget=({Contador})=>{
    return( 
    <div> 
       <img className="img-carrito"  src={Carrito} alt="" /><span className="span-carrito">  {Contador}</span>
       </div>
       )
}
export default CardWidget; 