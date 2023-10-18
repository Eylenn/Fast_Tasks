import React from "react";

function CursosInit() {
  return (
      
<div className="container encabezado" style={{ backgroundColor: '#FFFF63' }}>
      <h1 className="text-center">Contenido de cursos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
        <div className="col">
          <div className="card h-100">
            <img
              src={Fast_tasks}
              className="card-img-top"
              alt="Course 1"
            />
            <div className="card-body">
              <h5 className="card-title encabezado">Física</h5>
              <p className="card-text"> Elecróstatica
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Course 2"
            />
            <div className="card-body">
              <h5 className="card-title">Inglés</h5>
              <p className="card-text">Simple</p>
      past</div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Course 3"
            />
            <div className="card-body">
              <h5 className="card-title">Matemáticas</h5>
              <p className="card-text"> Derivadas
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300"
              className="card-img-top"
              alt="Course 4"
            />
            <div className="card-body">
              <h5 className="card-title">Química</h5>
              <p className="card-text"> Balanceo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CursosInit;