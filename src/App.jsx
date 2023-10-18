import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Inicio from "./Paginas/Inicio";
import Cursos from "./Paginas/Cursos";
import Login from "./Paginas/Login";
import Registro from "./Paginas/Registro";
import HomeL from './Paginas/homeL';
import Perfil from "./Paginas/perfil";
import FisicaL from "./Paginas/fisicaL";

 function App() {
  return (
    <Router>
      <Routes>
        
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/cursos' element={<Cursos/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/homeL' element={<HomeL/>}/>
        <Route exact path='/perfil' element={<Perfil/>}/>
        <Route exact path='/fisicaL' element={<FisicaL/>}/>
      </Routes>
    </Router>
  );
}
export default App;