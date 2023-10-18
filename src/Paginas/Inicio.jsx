import React from "react";
import Menu from "../Componentes/Menu";
import Portada from "../Componentes/portada";


function Inicio (){
  return (
    <div className="Inicio">
      <Menu/> 
      <Portada/>
    </div>
  );
}

export default Inicio;