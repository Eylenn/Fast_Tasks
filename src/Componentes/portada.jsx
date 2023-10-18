import React from "react";
import { Link } from "react-router-dom";
import Fast_tasks from "../Imagenes/Fast_tasks.png";


function Portada() {
  return (
    <div className="container" style={{ backgroundColor: '#F1F773' }}>
      
      <div className="row pt-3" style={{ backgroundColor: '#F1F773'}} >
        
        <img src={Fast_tasks} alt="logo" className="text-center" style={{ width: "300" }} style={{ backgroundColor: '#F1F773' }}/>
        
        <div className="mx-auto" style={{ backgroundColor: '#F1F773' }}>
          <p className="text-center">Inicia sesión o registrate con nosotros</p>
        </div>

        <Link to="/login">
          <div className="d-grid gap-2 mx-auto pb-1" style={{ backgroundColor: '#F1F773' }}>
            <button className="btn btn-primary" type="button">Iniciar Sesión</button>
          </div>
        </Link>

        <Link to="/registro">
          <div className="d-grid gap-2 mx-auto pb-3" style={{ backgroundColor: '#F1F773' }}>
            <button className="btn btn-primary" type="button">Registrarme</button>
          </div>
        </Link>  
        
      </div>
      
    </div>
  );
}

export default Portada;