import React from "react";
import { Link } from "react-router-dom";
import Fast_tasks from "../Imagenes/Fast_tasks.png";


function Init() {
  return (
    <div className="container">
      <div className="row">

        <img src={Fast_tasks} alt="logo" className="mx-auto" style={{ width: "400" }} style={{ backgroundColor: '#F1F773'}}/>

        <div className="container" style={{ backgroundColor: '#F1F773' }}>
          <div className="mx-auto pt-3 pb-3">
            <div className="card">
              <div className="card-header">
                Iniciar sesión
              </div>

              <div className="card-body">
                <form action="/HomeL" method="get">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electónico</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Recuerdarme</label>
                  </div>
                  <button type="submit" class="btn btn-primary">Iniciar sesión</button>
                </form>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

}

export default Init;                  