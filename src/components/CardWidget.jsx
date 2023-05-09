import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CardWidget=({contador})=>{
    return( 
    <div> 
     <FontAwesomeIcon icon={faCartShopping} size="lg" style={{color: "#959697",}} /> <span className="span-carrito">  {contador}</span>
       </div>
       )
}
export default CardWidget; 