import React from "react";
import { RiGlobalFill } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';
import { BsInstagram }  from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

function Profile() {
  return (
    <section style = {{backgroundColor:"#F1F773"}}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img src="https://www.creartuavatar.com/images/f17.svg" alt="avatar" className="rounded-circle img-fluid" style={{width:"150px"}} />
                <h5 className="my-3">Eylen Cavadia</h5>
                <p className="text-muted mb-1">Desarrolladora de software</p>
                <p className="text-muted mb-4">Medellin-Colombia</p>
                <div className="d-flex justify-content-center mb-3">
                  <button type="button" className="btn btn-primary">Editar Perfil</button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill/>
                    <p className="mb-0">@eylen_cavadia</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub/>
                    <p className="mb-0">@eylenn</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter/>
                    <p className="mb-0">@jacoh26</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram/>
                    <p className="mb-0">@eylen_cavadia</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook/>
                    <p className="mb-0">Eylen Cavadia</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                
                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">Eylen Cavadia</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">eylenkarolcavadias@gmail.com</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Numero</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">3163872247</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Direccion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">calle 4 #56-12</p>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-sm-3">
                    <p className= "mb-0">Fecha de nacimiento</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-o">26 sep 2006</p>
                  </div>
                </div>  
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4 mb-mb-0">
                  <div className="card-body">
                    <p className="mb-4"><span className="text-primary font-italic me-1">Habilidades</span> Proyecto PPI</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;