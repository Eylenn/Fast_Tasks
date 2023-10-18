import React from "react";
import Menu from "../Componentes/Menu";
import CursosInit from "../Componentes/content";
import CursosL from "../Componentes/cursosL";

function Cursos (){
  return (
    <div className="Cursos">
      <Menu/>
      <CursosInit/>
      <CursosL/>
    </div>
  );
}

export default Cursos;