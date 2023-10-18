import React from 'react';
import { Link } from 'react-router-dom';
import '../Estilos/estilos.css';
import Fast_tasks from "../Imagenes/Fast_tasks.png";

function InicioL() {
  return (
    <div className="row">
      <hr/>

      <div className="container mx-auto text-center" style={{ backgroundColor: '#F1F773' }} >
        <h2 className="pt-3">Cursos Destacados</h2>
      </div>

      <div className="container px-5 pb-3" style={{ backgroundColor: '#F1F773' }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">

              <div className="card">
                <img src={Fast_tasks} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Inglés</h5>
                  <p className="card-text">False friend</p>
                  <div className="row pb-3">
                    <div className="col"><p><small>120 horas</small></p></div>
                    <div className="col"><p><small>3 modulos</small></p></div>
                    <div className="col"><p><small>100% online</small></p></div>
                  </div>
                  <Link href="#" className="btn btn-primary">Siguiente</Link>
                 <div className="row pb-3">
                 </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={Fast_tasks} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Fisica</h5>
                  <p className="card-text">Fuerza</p>
                  <div className="row pb-3">
                    <div className="col"><p><small>120 horas</small></p></div>
                    <div className="col"><p><small>3 modulos</small></p></div>
                    <div className="col"><p><small>100% online</small></p></div>
                  </div>
                  <Link to="/fisicaL" className="btn btn-primary">Siguiente</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card">
                <img src={Fast_tasks} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Matemáticas</h5>
                  <p className="card-text">Teorema de Pitagóras</p>
                  <div className="row pb-3">
                    <div className="col"><p><small>120 horas</small></p></div>
                    <div className="col"><p><small>3 modulos</small></p></div>
                    <div className="col"><p><small>100% online</small></p></div>
                  </div>
                  <Link href="#" class="btn btn-primary">Siguiente</Link>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
       <div className="container">
        <div className='p-3'>
          <h1 className="encabezado text fw-bold">Continuar con mis cursos</h1>
          <div className="card">
            <div className="card-header encabezado">
              <small>Materias | Fisica</small>
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
              <Link to="#" className="btn btn-primary">Continuar</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioL;