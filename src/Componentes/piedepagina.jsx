import React from "react";
import Fast tasks from "../Imagenes/Fast_tasks.png";
import { PiCopyrightBold } from "react-icons/pi";

function Piedepagina () {
  return (
    <div className="container-fluid">
      <div className="row mx-auto">
        <div className="text-center pt-5 mx-auto">
          <h2 className="encabezado">Aprende con nuestra página</h2>
          <img src={Fast tasks} alt="pdp" width:"100"/>
          <h5 className="encabezado px-5">Esperamos que hayas aprendido mucho con nuestra página</h5>
          <p className="px-3"><small>Disfruta con nuestra página</small></p>
          <section>
            <button className="btn btn-success">Instalar Fast Tasks</button>
          </section>
          <div id="copyright">
            <hr/>
            <p><small>Fast Tasks <PiCopyrightBold/> Todos los derechos reservados.</small></p>
          </div >
        </div>
      </div>
    </div>
  );
}

export default Piedepagina;