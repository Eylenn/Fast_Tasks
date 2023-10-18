import React from "react";
import MenuL from "../Componentes/menuL";
import { Link } from "react-router-dom";

function CursosL() {
  return (
    <div className="row">
      <div className="container">
        <div className="p-3">
          <div className="card">
            <div className="card-header encabezado">
              <small>Materias | Física</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Electrostática</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "30%" }}>
                  30% 
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr />
              <Link to="/fisicaL" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="container">
          <div className="card">
            <div className="card-header encabezado">
              <small>Materias | Inglés</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Simple Past</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}>
                  50%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr />
              <Link to="/cursos/ingles/simple-past" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div className="p-3">
        <div className="container">
          <div className="card">
            <div className="card-header encabezado">
              <small>Materias | Matemáticas</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Derivadas</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "40%" }}>
                  40%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr />
              <Link to="/cursos/matematicas/derivadas" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
      <hr/>

      <div className="p-3">
        <div className="container">
          <div className="card">
            <div className="card-header encabezado">
              <small>Materias | Química</small>
            </div>
            <div className="card-body">
              <h5 className="card-title encabezado">Balanceo</h5>
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "20%" }}>
                  20%
                </div>
              </div>
              <p className="card-text pt-2">Avance general.</p>
              <hr />
              <Link to="/cursos/quimica/balanceo" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  
  );
}

export default CursosL;