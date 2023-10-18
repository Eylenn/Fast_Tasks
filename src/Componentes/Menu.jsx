import React from "react";
import '../Estilos/estilos.css';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header" style={{ backgroundColor: '#F1F773'}}>
      
      <nav className="navbar navbar-expand-lg.bg-body-tertiary encabezado" style={{ backgroundColor: '#F1F773' }}>
        <div className="container-fluid" style={{ backgroundColor: '#F1F773' }}> 
          <div className="text-center">
          </div>
          <Link className="navbar-brand <" to="/">Fast Tasks</Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/registro">Registro</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/cursos">Cursos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar"  style={{ backgroundColor: '#F1F773' }} aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>
      <div className="p-3">
        <div className="card">
          <div className="text-center mx-auto"></div>
          <div className="card-header text-center encabezado" style={{ backgroundColor: '#FFDE78'}} >
            
            BIENVENIDO
          </div>
          <div className="card-body" style={{ backgroundColor: '#F1F773' }}>
            <h5 className="text-center mxauto encabezado">Fast Tasks</h5>
            <p className="card-text">Es una página web que tiene como objetivo ayudar a los estudiantes con sus tareas, esto mediante videos implementados por profesores verificados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;

