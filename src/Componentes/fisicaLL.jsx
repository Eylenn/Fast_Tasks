import React from "react";

function Fisica(){
  return (
    
    <div className="container encabezado pt-3" style={{ backgroundColor: '#FFFF63' }}>
      <h1 className="text-center mx-auto">Física</h1>
     <div/>
      <div className="container letras">
      <h3 className="text-center mx-auto">La física es una de las disciplinas académicas más antiguas, cuyas raíces se remontan a los inicios de la civilización, cuando el hombre empezó a tratar de entender las fuerzas que regían el mundo a su alrededor.</h3>
     </div>
     <div className="text-center">
      <img src="https://www.areaciencias.com/wp-content/uploads/2020/10/que-es-fisica.jpg" alt="Física" className="text-center" style={{maxWidth:"300px"}}>
      </img>
     </div> 
       <div class="dropdown text-center mx-auto pt-3">
  <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Contenidos
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Electrostatica</a></li>
    <li><a class="dropdown-item" href="#">La luz</a></li>
    <li><a class="dropdown-item" href="#">Ondas</a></li>
    <li><a class="dropdown-item" href="#">Vectores</a></li>
  </ul>
</div>
      <div className="container pt-3 text-center mx-auto" style={{ backgroundColor: '#FFFF63'}}>
        <h1 className="encabezado">Ejercicios</h1>
        <h2 className="letras">La luz</h2>
        <h4 className="letras">Un rayo de luz cuenta con una longitud de onda en el vacío de 640 nm. Determina su velocidad y su longitud de onda, tras penetrar en otro medio cuyo índice de refracción es de 1.45.</h4>
      </div>
      <div className="pb-4">
      </div>
    </div>
  );
}

export default Fisica;