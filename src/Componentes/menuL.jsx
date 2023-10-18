import React from "react";
import '../Estilos/estilos.css';
import { Link } from "react-router-dom";

function MenuL() {
  return (
    <div className="header" style={{ backgroundColor: '#F1F773' }}>

      <nav className="navbar navbar-expand-lg.bg-body-tertiary" style={{ backgroundColor: '#F1F773' }} >
        <div className="container-fluid" style={{ backgroundColor: '#F1F773' }}> 
          <div className="text-center">
          </div>
          <Link className="navbar-brand encabezado<" to="/homeL">Fast Tasks</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/perfil">Perfil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/">Cerrar sesión</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container pb-4">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar"  style={{ backgroundColor: '#F1F773' }} aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div> 
    </div>
  );
}

export default MenuL;