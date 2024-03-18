import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavBarComponent';
import ListaTareas from './components/ListaTareas';
import CrearUsuario from './components/CrearUsuario';
import Login from './components/Login';
function App() {
  return (
    <Router>
       <NavbarComponent/>
    <div className="App">
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/create-user" element={<CrearUsuario/>}/>
          <Route path="/lista-tareas" element={<ListaTareas/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
