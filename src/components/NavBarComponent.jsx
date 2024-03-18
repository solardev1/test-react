import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  const navigate = useNavigate();
  
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const logueado = usuario ? usuario.logueado : false;

  const handleLogout = () => {
    usuario.logueado = false;
    localStorage.setItem('usuario', JSON.stringify(usuario));
    navigate('/login');
  };

  const handleInicioClick = () => {
    if (logueado) {
      navigate('/lista-tareas');
    } else {
      navigate('/login');
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={handleInicioClick}>Lista de Tareas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={handleInicioClick} className="mx-auto">Inicio</Nav.Link>
        </Nav>
        {logueado && (
          <Nav>
            <Nav.Link onClick={handleLogout}>Salir</Nav.Link>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;